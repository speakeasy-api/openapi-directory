import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iprouteinfo as shared_iprouteinfo


@dataclass_json
@dataclasses.dataclass
class ListIPRoutesResult:
    ip_routes_info: Optional[list[shared_iprouteinfo.IPRouteInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRoutesInfo') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
