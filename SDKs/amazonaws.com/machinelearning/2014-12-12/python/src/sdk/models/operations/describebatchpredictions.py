import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describebatchpredictionsinput as shared_describebatchpredictionsinput
from ..shared import describebatchpredictionsoutput as shared_describebatchpredictionsoutput


@dataclasses.dataclass
class DescribeBatchPredictionsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBatchPredictionsXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_DESCRIBE_BATCH_PREDICTIONS = "AmazonML_20141212.DescribeBatchPredictions"


@dataclasses.dataclass
class DescribeBatchPredictionsHeaders:
    x_amz_target: DescribeBatchPredictionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeBatchPredictionsRequest:
    headers: DescribeBatchPredictionsHeaders = dataclasses.field()
    query_params: DescribeBatchPredictionsQueryParams = dataclasses.field()
    request: shared_describebatchpredictionsinput.DescribeBatchPredictionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeBatchPredictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_batch_predictions_output: Optional[shared_describebatchpredictionsoutput.DescribeBatchPredictionsOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
