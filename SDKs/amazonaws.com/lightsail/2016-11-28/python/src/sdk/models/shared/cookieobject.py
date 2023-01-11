import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardvalues_enum as shared_forwardvalues_enum


@dataclass_json
@dataclasses.dataclass
class CookieObject:
    r"""CookieObject
    <p>Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.</p> <p>For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.</p>
    """
    
    cookies_allow_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookiesAllowList') }})
    option: Optional[shared_forwardvalues_enum.ForwardValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    
