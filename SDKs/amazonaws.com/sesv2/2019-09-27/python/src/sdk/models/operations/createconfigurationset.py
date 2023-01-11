import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlspolicy_enum as shared_tlspolicy_enum
from ..shared import suppressionlistreason_enum as shared_suppressionlistreason_enum
from ..shared import tag as shared_tag


@dataclasses.dataclass
class CreateConfigurationSetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBodyDeliveryOptions:
    r"""CreateConfigurationSetRequestBodyDeliveryOptions
    Used to associate a configuration set with a dedicated IP pool.
    """
    
    sending_pool_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingPoolName') }})
    tls_policy: Optional[shared_tlspolicy_enum.TLSPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsPolicy') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBodyReputationOptions:
    r"""CreateConfigurationSetRequestBodyReputationOptions
    Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
    """
    
    last_fresh_start: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastFreshStart'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reputation_metrics_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReputationMetricsEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBodySendingOptions:
    r"""CreateConfigurationSetRequestBodySendingOptions
    Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
    """
    
    sending_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBodySuppressionOptions:
    r"""CreateConfigurationSetRequestBodySuppressionOptions
    An object that contains information about the suppression list preferences for your account.
    """
    
    suppressed_reasons: Optional[list[shared_suppressionlistreason_enum.SuppressionListReasonEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedReasons') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBodyTrackingOptions:
    r"""CreateConfigurationSetRequestBodyTrackingOptions
    <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
    """
    
    custom_redirect_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomRedirectDomain') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateConfigurationSetRequestBody:
    configuration_set_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSetName') }})
    delivery_options: Optional[CreateConfigurationSetRequestBodyDeliveryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryOptions') }})
    reputation_options: Optional[CreateConfigurationSetRequestBodyReputationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReputationOptions') }})
    sending_options: Optional[CreateConfigurationSetRequestBodySendingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendingOptions') }})
    suppression_options: Optional[CreateConfigurationSetRequestBodySuppressionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressionOptions') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    tracking_options: Optional[CreateConfigurationSetRequestBodyTrackingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingOptions') }})
    

@dataclasses.dataclass
class CreateConfigurationSetRequest:
    headers: CreateConfigurationSetHeaders = dataclasses.field()
    request: CreateConfigurationSetRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateConfigurationSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_configuration_set_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
