import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fields_enum as shared_fields_enum
from ..shared import asananamedresource as shared_asananamedresource
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetFavoritesForUserPathParams:
    user_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFavoritesForUserQueryParams:
    resource_type: shared_fields_enum.FieldsEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetFavoritesForUser200ApplicationJSON:
    data: Optional[list[shared_asananamedresource.AsanaNamedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetFavoritesForUserRequest:
    path_params: GetFavoritesForUserPathParams = dataclasses.field()
    query_params: GetFavoritesForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFavoritesForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_favorites_for_user_200_application_json_object: Optional[GetFavoritesForUser200ApplicationJSON] = dataclasses.field(default=None)
    
