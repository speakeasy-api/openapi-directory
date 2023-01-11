import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SnowflakeMetadata:
    r"""SnowflakeMetadata
     The connector metadata specific to Snowflake. 
    """
    
    supported_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedRegions') }})
    
