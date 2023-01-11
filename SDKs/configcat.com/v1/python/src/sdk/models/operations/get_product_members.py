import dataclasses
from typing import Optional
from ..shared import membermodel as shared_membermodel


@dataclasses.dataclass
class GetProductMembersPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductMembersRequest:
    path_params: GetProductMembersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProductMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    member_models: Optional[list[shared_membermodel.MemberModel]] = dataclasses.field(default=None)
    
