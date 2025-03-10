"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import filteroperator as shared_filteroperator
from typing import Optional


@dataclasses.dataclass
class GetChannelCatalogFilterOperatorsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUPCommonErrorResponseMessage] = dataclasses.field(default=None)
    r"""Occurs when something goes wrong"""  
    filter_operators: Optional[list[shared_filteroperator.FilterOperator]] = dataclasses.field(default=None)
    r"""Channel catalog  filter operator list"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    