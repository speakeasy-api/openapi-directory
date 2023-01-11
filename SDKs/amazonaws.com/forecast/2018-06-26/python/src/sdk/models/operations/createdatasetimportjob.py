import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createdatasetimportjobrequest as shared_createdatasetimportjobrequest
from ..shared import createdatasetimportjobresponse as shared_createdatasetimportjobresponse

class CreateDatasetImportJobXAmzTargetEnum(str, Enum):
    AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB = "AmazonForecast.CreateDatasetImportJob"


@dataclasses.dataclass
class CreateDatasetImportJobHeaders:
    x_amz_target: CreateDatasetImportJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDatasetImportJobRequest:
    headers: CreateDatasetImportJobHeaders = dataclasses.field()
    request: shared_createdatasetimportjobrequest.CreateDatasetImportJobRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDatasetImportJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_dataset_import_job_response: Optional[shared_createdatasetimportjobresponse.CreateDatasetImportJobResponse] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
