"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import updatecampaignrequest as shared_updatecampaignrequest
from ..shared import updatecampaignresponse as shared_updatecampaignresponse
from enum import Enum
from typing import Any, Optional

class UpdateCampaignXAmzTargetEnum(str, Enum):
    AMAZON_PERSONALIZE_UPDATE_CAMPAIGN = 'AmazonPersonalize.UpdateCampaign'


@dataclasses.dataclass
class UpdateCampaignRequest:
    
    update_campaign_request: shared_updatecampaignrequest.UpdateCampaignRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: UpdateCampaignXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateCampaignResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceInUseException"""  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    update_campaign_response: Optional[shared_updatecampaignresponse.UpdateCampaignResponse] = dataclasses.field(default=None)
    r"""Success"""  
    