import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import reportformattype_enum as shared_reportformattype_enum


@dataclasses.dataclass
class GetCredentialReportResponse:
    r"""GetCredentialReportResponse
    Contains the response to a successful <a>GetCredentialReport</a> request. 
    """
    
    content: Optional[str] = dataclasses.field(default=None)
    generated_time: Optional[datetime] = dataclasses.field(default=None)
    report_format: Optional[shared_reportformattype_enum.ReportFormatTypeEnum] = dataclasses.field(default=None)
    
