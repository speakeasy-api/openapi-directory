import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionkey as shared_encryptionkey
from ..shared import mergestrategy_enum as shared_mergestrategy_enum
from ..shared import terminologydata as shared_terminologydata


@dataclass_json
@dataclasses.dataclass
class ImportTerminologyRequest:
    merge_strategy: shared_mergestrategy_enum.MergeStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergeStrategy') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    terminology_data: shared_terminologydata.TerminologyData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminologyData') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    encryption_key: Optional[shared_encryptionkey.EncryptionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    
