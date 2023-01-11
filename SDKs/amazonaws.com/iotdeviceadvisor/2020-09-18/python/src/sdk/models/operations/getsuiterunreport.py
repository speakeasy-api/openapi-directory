import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getsuiterunreportresponse as shared_getsuiterunreportresponse


@dataclasses.dataclass
class GetSuiteRunReportPathParams:
    suite_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'suiteDefinitionId', 'style': 'simple', 'explode': False }})
    suite_run_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'suiteRunId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuiteRunReportHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuiteRunReportRequest:
    headers: GetSuiteRunReportHeaders = dataclasses.field()
    path_params: GetSuiteRunReportPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSuiteRunReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_suite_run_report_response: Optional[shared_getsuiterunreportresponse.GetSuiteRunReportResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
