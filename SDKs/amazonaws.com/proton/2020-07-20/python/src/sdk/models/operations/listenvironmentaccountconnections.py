import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listenvironmentaccountconnectionsinput as shared_listenvironmentaccountconnectionsinput
from ..shared import listenvironmentaccountconnectionsoutput as shared_listenvironmentaccountconnectionsoutput


@dataclasses.dataclass
class ListEnvironmentAccountConnectionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListEnvironmentAccountConnectionsXAmzTargetEnum(str, Enum):
    AWS_PROTON20200720_LIST_ENVIRONMENT_ACCOUNT_CONNECTIONS = "AwsProton20200720.ListEnvironmentAccountConnections"


@dataclasses.dataclass
class ListEnvironmentAccountConnectionsHeaders:
    x_amz_target: ListEnvironmentAccountConnectionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListEnvironmentAccountConnectionsRequest:
    headers: ListEnvironmentAccountConnectionsHeaders = dataclasses.field()
    query_params: ListEnvironmentAccountConnectionsQueryParams = dataclasses.field()
    request: shared_listenvironmentaccountconnectionsinput.ListEnvironmentAccountConnectionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListEnvironmentAccountConnectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_environment_account_connections_output: Optional[shared_listenvironmentaccountconnectionsoutput.ListEnvironmentAccountConnectionsOutput] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
