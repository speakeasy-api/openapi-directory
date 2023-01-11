import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rawmessage as shared_rawmessage
from ..shared import message as shared_message
from ..shared import template as shared_template
from ..shared import messagetag as shared_messagetag
from ..shared import sendemailresponse as shared_sendemailresponse


@dataclasses.dataclass
class SendEmailHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SendEmailRequestBodyContent:
    r"""SendEmailRequestBodyContent
    An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
    """
    
    raw: Optional[shared_rawmessage.RawMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Raw') }})
    simple: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Simple') }})
    template: Optional[shared_template.Template] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Template') }})
    

@dataclass_json
@dataclasses.dataclass
class SendEmailRequestBodyDestination:
    r"""SendEmailRequestBodyDestination
    An object that describes the recipients for an email.
    """
    
    bcc_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BccAddresses') }})
    cc_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CcAddresses') }})
    to_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToAddresses') }})
    

@dataclass_json
@dataclasses.dataclass
class SendEmailRequestBodyListManagementOptions:
    r"""SendEmailRequestBodyListManagementOptions
    An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
    """
    
    contact_list_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactListName') }})
    topic_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    

@dataclass_json
@dataclasses.dataclass
class SendEmailRequestBody:
    content: SendEmailRequestBodyContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    configuration_set_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    destination: Optional[SendEmailRequestBodyDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    email_tags: Optional[list[shared_messagetag.MessageTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailTags') }})
    feedback_forwarding_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddress') }})
    feedback_forwarding_email_address_identity_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackForwardingEmailAddressIdentityArn') }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddress') }})
    from_email_address_identity_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromEmailAddressIdentityArn') }})
    list_management_options: Optional[SendEmailRequestBodyListManagementOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListManagementOptions') }})
    reply_to_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplyToAddresses') }})
    

@dataclasses.dataclass
class SendEmailRequest:
    headers: SendEmailHeaders = dataclasses.field()
    request: SendEmailRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_suspended_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    mail_from_domain_not_verified_exception: Optional[Any] = dataclasses.field(default=None)
    message_rejected: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    send_email_response: Optional[shared_sendemailresponse.SendEmailResponse] = dataclasses.field(default=None)
    sending_paused_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
