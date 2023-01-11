import dataclasses
from typing import Optional
from enum import Enum
from ..shared import reportstatetype_enum as shared_reportstatetype_enum


@dataclasses.dataclass
class GenerateCredentialReportResponse:
    r"""GenerateCredentialReportResponse
    Contains the response to a successful <a>GenerateCredentialReport</a> request. 
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    state: Optional[shared_reportstatetype_enum.ReportStateTypeEnum] = dataclasses.field(default=None)
    
