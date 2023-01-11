import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import publicchannelinfolist as shared_publicchannelinfolist


@dataclasses.dataclass
class GetChannelsPathParams:
    country_iso_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIsoCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelsHeaders:
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelsRequest:
    headers: GetChannelsHeaders = dataclasses.field()
    path_params: GetChannelsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    public_channel_info_list: Optional[shared_publicchannelinfolist.PublicChannelInfoList] = dataclasses.field(default=None)
    
