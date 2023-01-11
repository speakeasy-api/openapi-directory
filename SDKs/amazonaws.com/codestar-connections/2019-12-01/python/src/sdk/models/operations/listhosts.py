import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import listhostsinput as shared_listhostsinput
from ..shared import listhostsoutput as shared_listhostsoutput


@dataclasses.dataclass
class ListHostsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListHostsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS_20191201_LIST_HOSTS = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts"


@dataclasses.dataclass
class ListHostsHeaders:
    x_amz_target: ListHostsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListHostsRequest:
    headers: ListHostsHeaders = dataclasses.field()
    query_params: ListHostsQueryParams = dataclasses.field()
    request: shared_listhostsinput.ListHostsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListHostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hosts_output: Optional[shared_listhostsoutput.ListHostsOutput] = dataclasses.field(default=None)
    
