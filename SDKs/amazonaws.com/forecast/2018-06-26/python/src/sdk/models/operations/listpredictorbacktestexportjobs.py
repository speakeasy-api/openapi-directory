import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listpredictorbacktestexportjobsrequest as shared_listpredictorbacktestexportjobsrequest
from ..shared import listpredictorbacktestexportjobsresponse as shared_listpredictorbacktestexportjobsresponse


@dataclasses.dataclass
class ListPredictorBacktestExportJobsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListPredictorBacktestExportJobsXAmzTargetEnum(str, Enum):
    AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS = "AmazonForecast.ListPredictorBacktestExportJobs"


@dataclasses.dataclass
class ListPredictorBacktestExportJobsHeaders:
    x_amz_target: ListPredictorBacktestExportJobsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListPredictorBacktestExportJobsRequest:
    headers: ListPredictorBacktestExportJobsHeaders = dataclasses.field()
    query_params: ListPredictorBacktestExportJobsQueryParams = dataclasses.field()
    request: shared_listpredictorbacktestexportjobsrequest.ListPredictorBacktestExportJobsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListPredictorBacktestExportJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_predictor_backtest_export_jobs_response: Optional[shared_listpredictorbacktestexportjobsresponse.ListPredictorBacktestExportJobsResponse] = dataclasses.field(default=None)
    
