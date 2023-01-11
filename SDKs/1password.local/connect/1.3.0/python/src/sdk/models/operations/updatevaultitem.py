import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import fullitem as shared_fullitem
from ..shared import errorresponse as shared_errorresponse
from ..shared import fullitem as shared_fullitem


@dataclasses.dataclass
class UpdateVaultItemPathParams:
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVaultItemSecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateVaultItemRequest:
    path_params: UpdateVaultItemPathParams = dataclasses.field()
    security: UpdateVaultItemSecurity = dataclasses.field()
    request: Optional[shared_fullitem.FullItemInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateVaultItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    full_item: Optional[shared_fullitem.FullItem] = dataclasses.field(default=None)
    
