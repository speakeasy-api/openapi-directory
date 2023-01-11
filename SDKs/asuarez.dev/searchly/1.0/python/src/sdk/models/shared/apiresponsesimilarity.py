import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIResponseSimilarityResponseSimilarityList:
    r"""APIResponseSimilarityResponseSimilarityList
    Song similarity item.
    """
    
    artist_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist_name') }})
    artist_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist_url') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    index_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index_id') }})
    lyrics: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyrics') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    song_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song_name') }})
    song_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song_url') }})
    

@dataclass_json
@dataclasses.dataclass
class APIResponseSimilarityResponse:
    r"""APIResponseSimilarityResponse
    Contains the response data if the request was successful.
    """
    
    similarity_list: Optional[list[APIResponseSimilarityResponseSimilarityList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('similarity_list') }})
    

@dataclass_json
@dataclasses.dataclass
class APIResponseSimilarity:
    error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: Optional[APIResponseSimilarityResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
