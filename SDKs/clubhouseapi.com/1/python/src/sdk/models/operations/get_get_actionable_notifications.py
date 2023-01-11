import dataclasses



@dataclasses.dataclass
class GetGetActionableNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
