import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasettype_enum as shared_datasettype_enum
from ..shared import domain_enum as shared_domain_enum
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import schema as shared_schema
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDatasetRequest:
    dataset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    dataset_type: shared_datasettype_enum.DatasetTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetType') }})
    domain: shared_domain_enum.DomainEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    schema: shared_schema.Schema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schema') }})
    data_frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFrequency') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
