import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listconnectordefinitionversionsresponse as shared_listconnectordefinitionversionsresponse


@dataclasses.dataclass
class ListConnectorDefinitionVersionsPathParams:
    connector_definition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConnectorDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConnectorDefinitionVersionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConnectorDefinitionVersionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConnectorDefinitionVersionsRequest:
    headers: ListConnectorDefinitionVersionsHeaders = dataclasses.field()
    path_params: ListConnectorDefinitionVersionsPathParams = dataclasses.field()
    query_params: ListConnectorDefinitionVersionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListConnectorDefinitionVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_connector_definition_versions_response: Optional[shared_listconnectordefinitionversionsresponse.ListConnectorDefinitionVersionsResponse] = dataclasses.field(default=None)
    
