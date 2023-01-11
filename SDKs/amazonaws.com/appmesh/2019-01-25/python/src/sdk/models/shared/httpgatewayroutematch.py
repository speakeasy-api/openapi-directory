import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpgatewayrouteheader as shared_httpgatewayrouteheader
from ..shared import gatewayroutehostnamematch as shared_gatewayroutehostnamematch
from ..shared import httpmethod_enum as shared_httpmethod_enum
from ..shared import httppathmatch as shared_httppathmatch
from ..shared import httpqueryparameter as shared_httpqueryparameter


@dataclass_json
@dataclasses.dataclass
class HTTPGatewayRouteMatch:
    r"""HTTPGatewayRouteMatch
    An object that represents the criteria for determining a request match.
    """
    
    headers: Optional[list[shared_httpgatewayrouteheader.HTTPGatewayRouteHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    hostname: Optional[shared_gatewayroutehostnamematch.GatewayRouteHostnameMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    method: Optional[shared_httpmethod_enum.HTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    path: Optional[shared_httppathmatch.HTTPPathMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    query_parameters: Optional[list[shared_httpqueryparameter.HTTPQueryParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    
