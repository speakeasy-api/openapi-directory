import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metrictoretain as shared_metrictoretain
from ..shared import alerttarget as shared_alerttarget
from ..shared import behavior as shared_behavior
from ..shared import updatesecurityprofileresponse as shared_updatesecurityprofileresponse


@dataclasses.dataclass
class UpdateSecurityProfilePathParams:
    security_profile_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSecurityProfileQueryParams:
    expected_version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSecurityProfileRequestBody:
    additional_metrics_to_retain: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetain') }})
    additional_metrics_to_retain_v2: Optional[list[shared_metrictoretain.MetricToRetain]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalMetricsToRetainV2') }})
    alert_targets: Optional[dict[str, shared_alerttarget.AlertTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTargets') }})
    behaviors: Optional[list[shared_behavior.Behavior]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviors') }})
    delete_additional_metrics_to_retain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAdditionalMetricsToRetain') }})
    delete_alert_targets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAlertTargets') }})
    delete_behaviors: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteBehaviors') }})
    security_profile_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileDescription') }})
    

@dataclasses.dataclass
class UpdateSecurityProfileRequest:
    headers: UpdateSecurityProfileHeaders = dataclasses.field()
    path_params: UpdateSecurityProfilePathParams = dataclasses.field()
    query_params: UpdateSecurityProfileQueryParams = dataclasses.field()
    request: UpdateSecurityProfileRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSecurityProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_security_profile_response: Optional[shared_updatesecurityprofileresponse.UpdateSecurityProfileResponse] = dataclasses.field(default=None)
    version_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    
