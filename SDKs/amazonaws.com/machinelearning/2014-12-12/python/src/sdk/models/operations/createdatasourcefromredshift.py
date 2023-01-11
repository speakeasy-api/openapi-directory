import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createdatasourcefromredshiftinput as shared_createdatasourcefromredshiftinput
from ..shared import createdatasourcefromredshiftoutput as shared_createdatasourcefromredshiftoutput

class CreateDataSourceFromRedshiftXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_DATA_SOURCE_FROM_REDSHIFT = "AmazonML_20141212.CreateDataSourceFromRedshift"


@dataclasses.dataclass
class CreateDataSourceFromRedshiftHeaders:
    x_amz_target: CreateDataSourceFromRedshiftXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDataSourceFromRedshiftRequest:
    headers: CreateDataSourceFromRedshiftHeaders = dataclasses.field()
    request: shared_createdatasourcefromredshiftinput.CreateDataSourceFromRedshiftInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDataSourceFromRedshiftResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_data_source_from_redshift_output: Optional[shared_createdatasourcefromredshiftoutput.CreateDataSourceFromRedshiftOutput] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    
