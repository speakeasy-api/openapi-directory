import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sendalexaoffertomasterresponse as shared_sendalexaoffertomasterresponse


@dataclasses.dataclass
class SendAlexaOfferToMasterHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SendAlexaOfferToMasterRequestBody:
    channel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    message_payload: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessagePayload') }})
    sender_client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SenderClientId') }})
    

@dataclasses.dataclass
class SendAlexaOfferToMasterRequest:
    headers: SendAlexaOfferToMasterHeaders = dataclasses.field()
    request: SendAlexaOfferToMasterRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendAlexaOfferToMasterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    send_alexa_offer_to_master_response: Optional[shared_sendalexaoffertomasterresponse.SendAlexaOfferToMasterResponse] = dataclasses.field(default=None)
    
