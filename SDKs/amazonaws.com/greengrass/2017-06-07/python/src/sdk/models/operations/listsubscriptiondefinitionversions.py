import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listsubscriptiondefinitionversionsresponse as shared_listsubscriptiondefinitionversionsresponse


@dataclasses.dataclass
class ListSubscriptionDefinitionVersionsPathParams:
    subscription_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSubscriptionDefinitionVersionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSubscriptionDefinitionVersionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSubscriptionDefinitionVersionsRequest:
    headers: ListSubscriptionDefinitionVersionsHeaders = dataclasses.field()
    path_params: ListSubscriptionDefinitionVersionsPathParams = dataclasses.field()
    query_params: ListSubscriptionDefinitionVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSubscriptionDefinitionVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_subscription_definition_versions_response: Optional[shared_listsubscriptiondefinitionversionsresponse.ListSubscriptionDefinitionVersionsResponse] = dataclasses.field(default=None)
    
