import dataclasses



@dataclasses.dataclass
class PeopleSearchReadPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PeopleSearchReadRequest:
    path_params: PeopleSearchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PeopleSearchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
