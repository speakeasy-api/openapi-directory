import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createdatasourcefroms3input as shared_createdatasourcefroms3input
from ..shared import createdatasourcefroms3output as shared_createdatasourcefroms3output

class CreateDataSourceFromS3XAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_DATA_SOURCE_FROM_S3 = "AmazonML_20141212.CreateDataSourceFromS3"


@dataclasses.dataclass
class CreateDataSourceFromS3Headers:
    x_amz_target: CreateDataSourceFromS3XAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDataSourceFromS3Request:
    headers: CreateDataSourceFromS3Headers = dataclasses.field()
    request: shared_createdatasourcefroms3input.CreateDataSourceFromS3Input = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDataSourceFromS3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_data_source_from_s3_output: Optional[shared_createdatasourcefroms3output.CreateDataSourceFromS3Output] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
