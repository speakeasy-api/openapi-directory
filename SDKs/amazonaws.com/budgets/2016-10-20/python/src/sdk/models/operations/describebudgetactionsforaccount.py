import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describebudgetactionsforaccountrequest as shared_describebudgetactionsforaccountrequest
from ..shared import describebudgetactionsforaccountresponse as shared_describebudgetactionsforaccountresponse


@dataclasses.dataclass
class DescribeBudgetActionsForAccountQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeBudgetActionsForAccountXAmzTargetEnum(str, Enum):
    AWS_BUDGET_SERVICE_GATEWAY_DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT = "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"


@dataclasses.dataclass
class DescribeBudgetActionsForAccountHeaders:
    x_amz_target: DescribeBudgetActionsForAccountXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeBudgetActionsForAccountRequest:
    headers: DescribeBudgetActionsForAccountHeaders = dataclasses.field()
    query_params: DescribeBudgetActionsForAccountQueryParams = dataclasses.field()
    request: shared_describebudgetactionsforaccountrequest.DescribeBudgetActionsForAccountRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeBudgetActionsForAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    describe_budget_actions_for_account_response: Optional[shared_describebudgetactionsforaccountresponse.DescribeBudgetActionsForAccountResponse] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    
