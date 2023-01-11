import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import error as shared_error
from ..shared import channeldetails as shared_channeldetails

class GetMetadataOfAllChannelsByEnum(str, Enum):
    VALUE = "value"
    ID = "id"


@dataclasses.dataclass
class GetMetadataOfAllChannelsQueryParams:
    by: Optional[GetMetadataOfAllChannelsByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'by', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMetadataOfAllChannelsHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMetadataOfAllChannelsRequest:
    headers: GetMetadataOfAllChannelsHeaders = dataclasses.field()
    query_params: GetMetadataOfAllChannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMetadataOfAllChannelsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_metadata_of_all_channels_2_xx_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    get_metadata_of_all_channels_2_xx_text_html_string: Optional[str] = dataclasses.field(default=None)
    
