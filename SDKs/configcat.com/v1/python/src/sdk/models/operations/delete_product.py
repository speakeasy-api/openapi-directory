import dataclasses



@dataclasses.dataclass
class DeleteProductPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
