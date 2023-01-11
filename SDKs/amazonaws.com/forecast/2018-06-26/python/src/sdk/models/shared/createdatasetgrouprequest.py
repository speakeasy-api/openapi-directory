import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain_enum as shared_domain_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDatasetGroupRequest:
    dataset_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetGroupName') }})
    domain: shared_domain_enum.DomainEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    dataset_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArns') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
