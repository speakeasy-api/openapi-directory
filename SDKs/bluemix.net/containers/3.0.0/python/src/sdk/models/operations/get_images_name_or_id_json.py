import dataclasses
from typing import Optional
from ..shared import imagedetail as shared_imagedetail


@dataclasses.dataclass
class GetImagesNameOrIDJSONPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagesNameOrIDJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagesNameOrIDJSONRequest:
    headers: GetImagesNameOrIDJSONHeaders = dataclasses.field()
    path_params: GetImagesNameOrIDJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesNameOrIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_detail: Optional[shared_imagedetail.ImageDetail] = dataclasses.field(default=None)
    
