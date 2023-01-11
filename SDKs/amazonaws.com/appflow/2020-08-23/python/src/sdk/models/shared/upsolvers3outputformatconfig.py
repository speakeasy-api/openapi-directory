import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationconfig as shared_aggregationconfig
from ..shared import filetype_enum as shared_filetype_enum
from ..shared import prefixconfig as shared_prefixconfig


@dataclass_json
@dataclasses.dataclass
class UpsolverS3OutputFormatConfig:
    r"""UpsolverS3OutputFormatConfig
     The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. 
    """
    
    prefix_config: shared_prefixconfig.PrefixConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixConfig') }})
    aggregation_config: Optional[shared_aggregationconfig.AggregationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationConfig') }})
    file_type: Optional[shared_filetype_enum.FileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    
