import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class UpdateRepositoryHostedPropertyValuePathParams:
    app_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRepositoryHostedPropertyValueRequest:
    path_params: UpdateRepositoryHostedPropertyValuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateRepositoryHostedPropertyValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
