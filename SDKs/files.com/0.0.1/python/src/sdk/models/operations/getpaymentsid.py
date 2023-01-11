import dataclasses
from typing import Optional
from ..shared import accountlineitementity as shared_accountlineitementity


@dataclasses.dataclass
class GetPaymentsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentsIDRequest:
    path_params: GetPaymentsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_line_item_entity: Optional[shared_accountlineitementity.AccountLineItemEntity] = dataclasses.field(default=None)
    
