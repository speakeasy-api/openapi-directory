import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcefrequency_enum as shared_sourcefrequency_enum
from ..shared import sourcekeyword as shared_sourcekeyword
from ..shared import sourcesetupoption_enum as shared_sourcesetupoption_enum
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclass_json
@dataclasses.dataclass
class CreateControlMappingSource:
    r"""CreateControlMappingSource
     Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
    """
    
    source_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDescription') }})
    source_frequency: Optional[shared_sourcefrequency_enum.SourceFrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFrequency') }})
    source_keyword: Optional[shared_sourcekeyword.SourceKeyword] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceKeyword') }})
    source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    source_set_up_option: Optional[shared_sourcesetupoption_enum.SourceSetUpOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSetUpOption') }})
    source_type: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    troubleshooting_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('troubleshootingText') }})
    
