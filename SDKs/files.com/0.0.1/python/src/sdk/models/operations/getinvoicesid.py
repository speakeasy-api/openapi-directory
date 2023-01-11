import dataclasses
from typing import Optional
from ..shared import accountlineitementity as shared_accountlineitementity


@dataclasses.dataclass
class GetInvoicesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoicesIDRequest:
    path_params: GetInvoicesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_line_item_entity: Optional[shared_accountlineitementity.AccountLineItemEntity] = dataclasses.field(default=None)
    
