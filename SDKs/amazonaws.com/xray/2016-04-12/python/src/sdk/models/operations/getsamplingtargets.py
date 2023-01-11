import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samplingstatisticsdocument as shared_samplingstatisticsdocument
from ..shared import getsamplingtargetsresult as shared_getsamplingtargetsresult


@dataclasses.dataclass
class GetSamplingTargetsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSamplingTargetsRequestBody:
    sampling_statistics_documents: list[shared_samplingstatisticsdocument.SamplingStatisticsDocument] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingStatisticsDocuments') }})
    

@dataclasses.dataclass
class GetSamplingTargetsRequest:
    headers: GetSamplingTargetsHeaders = dataclasses.field()
    request: GetSamplingTargetsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSamplingTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sampling_targets_result: Optional[shared_getsamplingtargetsresult.GetSamplingTargetsResult] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
