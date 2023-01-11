import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routefilterprefix as shared_routefilterprefix


@dataclass_json
@dataclasses.dataclass
class UpdateDirectConnectGatewayAssociationRequest:
    add_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAllowedPrefixesToDirectConnectGateway') }})
    association_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationId') }})
    remove_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAllowedPrefixesToDirectConnectGateway') }})
    
