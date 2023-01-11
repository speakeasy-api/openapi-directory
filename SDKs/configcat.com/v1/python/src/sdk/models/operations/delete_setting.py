import dataclasses



@dataclasses.dataclass
class DeleteSettingPathParams:
    setting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'settingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSettingRequest:
    path_params: DeleteSettingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
