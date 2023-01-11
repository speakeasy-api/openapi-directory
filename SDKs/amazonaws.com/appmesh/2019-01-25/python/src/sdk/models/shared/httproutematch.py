import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouteheader as shared_httprouteheader
from ..shared import httpmethod_enum as shared_httpmethod_enum
from ..shared import httppathmatch as shared_httppathmatch
from ..shared import httpqueryparameter as shared_httpqueryparameter
from ..shared import httpscheme_enum as shared_httpscheme_enum


@dataclass_json
@dataclasses.dataclass
class HTTPRouteMatch:
    r"""HTTPRouteMatch
    An object that represents the requirements for a route to match HTTP requests for a virtual router.
    """
    
    headers: Optional[list[shared_httprouteheader.HTTPRouteHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[shared_httpmethod_enum.HTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    path: Optional[shared_httppathmatch.HTTPPathMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    query_parameters: Optional[list[shared_httpqueryparameter.HTTPQueryParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    scheme: Optional[shared_httpscheme_enum.HTTPSchemeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
