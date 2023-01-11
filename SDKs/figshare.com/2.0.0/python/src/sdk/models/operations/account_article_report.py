import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import accountreport as shared_accountreport


@dataclasses.dataclass
class AccountArticleReportQueryParams:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AccountArticleReportSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AccountArticleReportRequest:
    query_params: AccountArticleReportQueryParams = dataclasses.field()
    security: AccountArticleReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountArticleReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_reports: Optional[list[shared_accountreport.AccountReport]] = dataclasses.field(default=None)
    
