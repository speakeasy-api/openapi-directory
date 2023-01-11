import dataclasses



@dataclasses.dataclass
class DeleteGroupUsersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGroupUsersIDQueryParams:
    group_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    user_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteGroupUsersIDRequest:
    path_params: DeleteGroupUsersIDPathParams = dataclasses.field()
    query_params: DeleteGroupUsersIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGroupUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
