import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import network as shared_network
from ..shared import links as shared_links

class GetNetworksAdDealStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    PENDING_ACTIVE = "pending_active"
    PENDING_INACTIVE = "pending_inactive"

class GetNetworksSortEnum(str, Enum):
    CREATED_AT = "created_at"
    NAME = "name"
    UPDATED_AT = "updated_at"


@dataclasses.dataclass
class GetNetworksQueryParams:
    ad_deal_status: Optional[list[GetNetworksAdDealStatusEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ad_deal_status', 'style': 'form', 'explode': False }})
    ad_rep_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ad_rep_account_id', 'style': 'form', 'explode': True }})
    ids_: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids[]', 'style': 'form', 'explode': True }})
    page_number_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[number]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[list[GetNetworksSortEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworks200ApplicationVndAPIPlusJSON:
    data: Optional[list[shared_network.Network]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworks400ApplicationVndAPIPlusJSONErrorsSource:
    r"""GetNetworks400ApplicationVndAPIPlusJSONErrorsSource
    An object containing references to the source of the error, optionally including any of the following members.
    
    """
    
    parameter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    pointer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointer') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworks400ApplicationVndAPIPlusJSONErrors:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    source: Optional[GetNetworks400ApplicationVndAPIPlusJSONErrorsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworks400ApplicationVndAPIPlusJSON:
    errors: Optional[list[GetNetworks400ApplicationVndAPIPlusJSONErrors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetNetworksRequest:
    query_params: GetNetworksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_networks_200_application_vnd_api_plus_json_object: Optional[GetNetworks200ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    get_networks_400_application_vnd_api_plus_json_object: Optional[GetNetworks400ApplicationVndAPIPlusJSON] = dataclasses.field(default=None)
    
