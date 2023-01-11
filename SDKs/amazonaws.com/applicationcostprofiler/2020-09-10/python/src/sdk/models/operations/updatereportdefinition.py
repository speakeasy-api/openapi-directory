import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatereportdefinitionresult as shared_updatereportdefinitionresult


@dataclasses.dataclass
class UpdateReportDefinitionPathParams:
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateReportDefinitionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateReportDefinitionRequestBodyDestinationS3Location:
    r"""UpdateReportDefinitionRequestBodyDestinationS3Location
    Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
class UpdateReportDefinitionRequestBodyFormatEnum(str, Enum):
    CSV = "CSV"
    PARQUET = "PARQUET"

class UpdateReportDefinitionRequestBodyReportFrequencyEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    ALL = "ALL"


@dataclass_json
@dataclasses.dataclass
class UpdateReportDefinitionRequestBody:
    destination_s3_location: UpdateReportDefinitionRequestBodyDestinationS3Location = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationS3Location') }})
    format: UpdateReportDefinitionRequestBodyFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    report_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDescription') }})
    report_frequency: UpdateReportDefinitionRequestBodyReportFrequencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFrequency') }})
    

@dataclasses.dataclass
class UpdateReportDefinitionRequest:
    headers: UpdateReportDefinitionHeaders = dataclasses.field()
    path_params: UpdateReportDefinitionPathParams = dataclasses.field()
    request: UpdateReportDefinitionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateReportDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_report_definition_result: Optional[shared_updatereportdefinitionresult.UpdateReportDefinitionResult] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
