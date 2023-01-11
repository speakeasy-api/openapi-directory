import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listapprovalruletemplatesinput as shared_listapprovalruletemplatesinput
from ..shared import listapprovalruletemplatesoutput as shared_listapprovalruletemplatesoutput


@dataclasses.dataclass
class ListApprovalRuleTemplatesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListApprovalRuleTemplatesXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_LIST_APPROVAL_RULE_TEMPLATES = "CodeCommit_20150413.ListApprovalRuleTemplates"


@dataclasses.dataclass
class ListApprovalRuleTemplatesHeaders:
    x_amz_target: ListApprovalRuleTemplatesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListApprovalRuleTemplatesRequest:
    headers: ListApprovalRuleTemplatesHeaders = dataclasses.field()
    query_params: ListApprovalRuleTemplatesQueryParams = dataclasses.field()
    request: shared_listapprovalruletemplatesinput.ListApprovalRuleTemplatesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListApprovalRuleTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_continuation_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_max_results_exception: Optional[Any] = dataclasses.field(default=None)
    list_approval_rule_templates_output: Optional[shared_listapprovalruletemplatesoutput.ListApprovalRuleTemplatesOutput] = dataclasses.field(default=None)
    
