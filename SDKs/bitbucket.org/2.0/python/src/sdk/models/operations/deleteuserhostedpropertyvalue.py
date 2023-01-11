import dataclasses



@dataclasses.dataclass
class DeleteUserHostedPropertyValuePathParams:
    app_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_key', 'style': 'simple', 'explode': False }})
    property_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'property_name', 'style': 'simple', 'explode': False }})
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserHostedPropertyValueRequest:
    path_params: DeleteUserHostedPropertyValuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserHostedPropertyValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
