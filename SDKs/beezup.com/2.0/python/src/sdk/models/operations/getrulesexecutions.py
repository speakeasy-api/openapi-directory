import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import ruleexecutionreportings as shared_ruleexecutionreportings


@dataclasses.dataclass
class GetRulesExecutionsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRulesExecutionsQueryParams:
    page_number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    page_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRulesExecutionsRequest:
    path_params: GetRulesExecutionsPathParams = dataclasses.field()
    query_params: GetRulesExecutionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRulesExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    rule_execution_reportings: Optional[shared_ruleexecutionreportings.RuleExecutionReportings] = dataclasses.field(default=None)
    
