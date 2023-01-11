import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubjectTypesRepositoryLink:
    r"""SubjectTypesRepositoryLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypesRepository:
    events: Optional[SubjectTypesRepositoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypesTeamLink:
    r"""SubjectTypesTeamLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypesTeam:
    events: Optional[SubjectTypesTeamLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypesUserLink:
    r"""SubjectTypesUserLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypesUser:
    events: Optional[SubjectTypesUserLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclasses.dataclass
class SubjectTypes:
    r"""SubjectTypes
    The mapping of resource/subject types pointing to their individual event types.
    """
    
    repository: Optional[SubjectTypesRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    team: Optional[SubjectTypesTeam] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    user: Optional[SubjectTypesUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
