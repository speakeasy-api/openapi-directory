import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecollectionresponse as shared_resourcecollectionresponse


@dataclasses.dataclass
class ExtractFilesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ExtractFilesExtractFilesRequestBody:
    parent_resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentResource') }})
    resource: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclasses.dataclass
class ExtractFilesRequest:
    headers: ExtractFilesHeaders = dataclasses.field()
    request: Optional[ExtractFilesExtractFilesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtractFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_collection_response: Optional[shared_resourcecollectionresponse.ResourceCollectionResponse] = dataclasses.field(default=None)
    
