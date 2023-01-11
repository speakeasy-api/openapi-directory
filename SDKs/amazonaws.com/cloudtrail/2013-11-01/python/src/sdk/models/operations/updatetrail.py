import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatetrailrequest as shared_updatetrailrequest
from ..shared import updatetrailresponse as shared_updatetrailresponse

class UpdateTrailXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_UPDATE_TRAIL = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"


@dataclasses.dataclass
class UpdateTrailHeaders:
    x_amz_target: UpdateTrailXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTrailRequest:
    headers: UpdateTrailHeaders = dataclasses.field()
    request: shared_updatetrailrequest.UpdateTrailRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTrailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_trail_access_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_trail_invalid_client_token_id_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_watch_logs_delivery_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_dependency_service_access_permission_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_encryption_policy_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_s3_bucket_policy_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_sns_topic_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_cloud_watch_logs_log_group_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_cloud_watch_logs_role_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_event_selectors_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_home_region_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_kms_key_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_s3_bucket_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_s3_prefix_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_sns_topic_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_trail_name_exception: Optional[Any] = dataclasses.field(default=None)
    kms_exception: Optional[Any] = dataclasses.field(default=None)
    kms_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    kms_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    not_organization_master_account_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    organization_not_in_all_features_mode_exception: Optional[Any] = dataclasses.field(default=None)
    organizations_not_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    s3_bucket_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    trail_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    trail_not_provided_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    update_trail_response: Optional[shared_updatetrailresponse.UpdateTrailResponse] = dataclasses.field(default=None)
    
