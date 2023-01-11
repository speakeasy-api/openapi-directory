import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3reference as shared_s3reference


@dataclasses.dataclass
class PutRawMessageContentPathParams:
    message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRawMessageContentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutRawMessageContentRequestBodyContent:
    r"""PutRawMessageContentRequestBodyContent
    <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html\">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href=\"https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6\">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
    """
    
    s3_reference: Optional[shared_s3reference.S3Reference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Reference') }})
    

@dataclass_json
@dataclasses.dataclass
class PutRawMessageContentRequestBody:
    content: PutRawMessageContentRequestBodyContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclasses.dataclass
class PutRawMessageContentRequest:
    headers: PutRawMessageContentHeaders = dataclasses.field()
    path_params: PutRawMessageContentPathParams = dataclasses.field()
    request: PutRawMessageContentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutRawMessageContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_content_location: Optional[Any] = dataclasses.field(default=None)
    message_frozen: Optional[Any] = dataclasses.field(default=None)
    message_rejected: Optional[Any] = dataclasses.field(default=None)
    put_raw_message_content_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
