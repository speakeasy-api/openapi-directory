import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentreadaction_enum as shared_documentreadaction_enum
from ..shared import documentreadmode_enum as shared_documentreadmode_enum
from ..shared import documentreadfeaturetypes_enum as shared_documentreadfeaturetypes_enum


@dataclass_json
@dataclasses.dataclass
class DocumentReaderConfig:
    r"""DocumentReaderConfig
    The input properties for a topic detection job.
    """
    
    document_read_action: shared_documentreadaction_enum.DocumentReadActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReadAction') }})
    document_read_mode: Optional[shared_documentreadmode_enum.DocumentReadModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentReadMode') }})
    feature_types: Optional[list[shared_documentreadfeaturetypes_enum.DocumentReadFeatureTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureTypes') }})
    
