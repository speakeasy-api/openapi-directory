import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIResponseSongResponseResults:
    r"""APIResponseSongResponseResults
    Song item.
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class APIResponseSongResponse:
    r"""APIResponseSongResponse
    Contains the response data if the request was successful.
    """
    
    results: Optional[list[APIResponseSongResponseResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclasses.dataclass
class APIResponseSong:
    error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: Optional[APIResponseSongResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
