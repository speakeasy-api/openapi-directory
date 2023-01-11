import dataclasses



@dataclasses.dataclass
class DeleteProductMemberPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductMemberRequest:
    path_params: DeleteProductMemberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
