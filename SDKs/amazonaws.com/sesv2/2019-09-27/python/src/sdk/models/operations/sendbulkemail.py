import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import template as shared_template
from ..shared import bulkemailentry as shared_bulkemailentry
from ..shared import messagetag as shared_messagetag
from ..shared import sendbulkemailresponse as shared_sendbulkemailresponse


@dataclasses.dataclass
class SendBulkEmailHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SendBulkEmailRequestBodyDefaultContent:
    r"""SendBulkEmailRequestBodyDefaultContent
    An object that contains the body of the message. You can specify a template message.
    """
    
    template: Optional[shared_template.Template] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Template') }})
    

@dataclass_json
@dataclasses.dataclass
class SendBulkEmailRequestBody:
    bulk_email_entries: list[shared_bulkemailentry.BulkEmailEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkEmailEntries') }})
    default_content: SendBulkEmailRequestBodyDefaultContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultContent') }})
    configuration_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    default_email_tags: Optional[list[shared_messagetag.MessageTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultEmailTags') }})
    feedback_forwarding_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddress') }})
    feedback_forwarding_email_address_identity_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddressIdentityArn') }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    from_email_address_identity_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddressIdentityArn') }})
    reply_to_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    

@dataclasses.dataclass
class SendBulkEmailRequest:
    headers: SendBulkEmailHeaders = dataclasses.field()
    request: SendBulkEmailRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendBulkEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_suspended_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = dataclasses.field(default=None)
    message_rejected: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    send_bulk_email_response: Optional[shared_sendbulkemailresponse.SendBulkEmailResponse] = dataclasses.field(default=None)
    sending_paused_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
