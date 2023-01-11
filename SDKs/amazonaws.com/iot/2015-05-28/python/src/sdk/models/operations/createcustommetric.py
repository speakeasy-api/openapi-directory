import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import createcustommetricresponse as shared_createcustommetricresponse


@dataclasses.dataclass
class CreateCustomMetricPathParams:
    metric_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'metricName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomMetricHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateCustomMetricRequestBodyMetricTypeEnum(str, Enum):
    STRING_LIST = "string-list"
    IP_ADDRESS_LIST = "ip-address-list"
    NUMBER_LIST = "number-list"
    NUMBER = "number"


@dataclass_json
@dataclasses.dataclass
class CreateCustomMetricRequestBody:
    client_request_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    metric_type: CreateCustomMetricRequestBodyMetricTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricType') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateCustomMetricRequest:
    headers: CreateCustomMetricHeaders = dataclasses.field()
    path_params: CreateCustomMetricPathParams = dataclasses.field()
    request: CreateCustomMetricRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCustomMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_custom_metric_response: Optional[shared_createcustommetricresponse.CreateCustomMetricResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
