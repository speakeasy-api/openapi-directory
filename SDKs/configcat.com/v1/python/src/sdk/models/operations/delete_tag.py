import dataclasses



@dataclasses.dataclass
class DeleteTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTagRequest:
    path_params: DeleteTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
