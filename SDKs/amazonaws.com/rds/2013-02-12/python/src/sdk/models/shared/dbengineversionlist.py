import dataclasses
from typing import Optional
from ..shared import characterset as shared_characterset
from ..shared import supportedcharactersetslist as shared_supportedcharactersetslist


@dataclasses.dataclass
class DbEngineVersionList:
    db_engine_description: Optional[str] = dataclasses.field(default=None)
    db_engine_version_description: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    default_character_set: Optional[shared_characterset.CharacterSet] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    supported_character_sets: Optional[list[shared_supportedcharactersetslist.SupportedCharacterSetsList]] = dataclasses.field(default=None)
    
