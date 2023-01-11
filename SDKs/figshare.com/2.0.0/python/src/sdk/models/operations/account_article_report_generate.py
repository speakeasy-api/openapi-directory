import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accountreport as shared_accountreport


@dataclasses.dataclass
class AccountArticleReportGenerateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountArticleReportGenerateRequest:
    security: AccountArticleReportGenerateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountArticleReportGenerateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_report: Optional[shared_accountreport.AccountReport] = dataclasses.field(default=None)
    
