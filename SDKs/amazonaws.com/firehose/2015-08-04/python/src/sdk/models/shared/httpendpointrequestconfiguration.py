import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpendpointcommonattribute as shared_httpendpointcommonattribute
from ..shared import contentencoding_enum as shared_contentencoding_enum


@dataclass_json
@dataclasses.dataclass
class HTTPEndpointRequestConfiguration:
    r"""HTTPEndpointRequestConfiguration
    The configuration of the HTTP endpoint request.
    """
    
    common_attributes: Optional[list[shared_httpendpointcommonattribute.HTTPEndpointCommonAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommonAttributes') }})
    content_encoding: Optional[shared_contentencoding_enum.ContentEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentEncoding') }})
    
