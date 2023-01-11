import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedCharacterSetsList:
    r"""SupportedCharacterSetsList
     This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
    """
    
    character_set_description: Optional[str] = dataclasses.field(default=None)
    character_set_name: Optional[str] = dataclasses.field(default=None)
    
