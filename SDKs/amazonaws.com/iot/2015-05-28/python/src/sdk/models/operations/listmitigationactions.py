import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listmitigationactionsresponse as shared_listmitigationactionsresponse

class ListMitigationActionsActionTypeEnum(str, Enum):
    UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE"
    UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE"
    ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP"
    REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION"
    ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING"
    PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS"


@dataclasses.dataclass
class ListMitigationActionsQueryParams:
    action_type: Optional[ListMitigationActionsActionTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'actionType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListMitigationActionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListMitigationActionsRequest:
    headers: ListMitigationActionsHeaders = dataclasses.field()
    query_params: ListMitigationActionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListMitigationActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_mitigation_actions_response: Optional[shared_listmitigationactionsresponse.ListMitigationActionsResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
