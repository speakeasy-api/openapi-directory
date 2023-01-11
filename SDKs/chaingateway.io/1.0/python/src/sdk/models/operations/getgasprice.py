import dataclasses
from typing import Optional
from ..shared import getgasprice as shared_getgasprice


@dataclasses.dataclass
class GetGasPriceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGasPriceRequest:
    headers: GetGasPriceHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetGasPriceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_gas_price: Optional[shared_getgasprice.GetGasPrice] = dataclasses.field(default=None)
    
