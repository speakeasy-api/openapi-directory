import dataclasses



@dataclasses.dataclass
class PostCqActionsQueryParams:
    authorizable_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authorizableId', 'style': 'form', 'explode': True }})
    changelog: str = dataclasses.field(metadata={'query_param': { 'field_name': 'changelog', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCqActionsRequest:
    query_params: PostCqActionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostCqActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
