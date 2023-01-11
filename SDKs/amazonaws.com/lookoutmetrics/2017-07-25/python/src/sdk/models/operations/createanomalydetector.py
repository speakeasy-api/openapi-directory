import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import frequency_enum as shared_frequency_enum
from ..shared import createanomalydetectorresponse as shared_createanomalydetectorresponse


@dataclasses.dataclass
class CreateAnomalyDetectorHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig:
    r"""CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
    Contains information about a detector's configuration.
    """
    
    anomaly_detector_frequency: Optional[shared_frequency_enum.FrequencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorFrequency') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAnomalyDetectorRequestBody:
    anomaly_detector_config: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorConfig') }})
    anomaly_detector_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorName') }})
    anomaly_detector_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyDetectorDescription') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclasses.dataclass
class CreateAnomalyDetectorRequest:
    headers: CreateAnomalyDetectorHeaders = dataclasses.field()
    request: CreateAnomalyDetectorRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAnomalyDetectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_anomaly_detector_response: Optional[shared_createanomalydetectorresponse.CreateAnomalyDetectorResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
