import dataclasses



@dataclasses.dataclass
class GetGetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
