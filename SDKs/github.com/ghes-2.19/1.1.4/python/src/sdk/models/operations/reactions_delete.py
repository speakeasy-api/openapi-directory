import dataclasses



@dataclasses.dataclass
class ReactionsDeletePathParams:
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteRequest:
    headers: ReactionsDeleteHeaders = dataclasses.field()
    path_params: ReactionsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
