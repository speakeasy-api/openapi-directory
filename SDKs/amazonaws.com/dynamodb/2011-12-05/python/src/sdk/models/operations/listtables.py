import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtablesinput as shared_listtablesinput
from ..shared import listtablesoutput as shared_listtablesoutput


@dataclasses.dataclass
class ListTablesQueryParams:
    exclusive_start_table_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartTableName', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class ListTablesXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20111205_LIST_TABLES = "DynamoDB_20111205.ListTables"


@dataclasses.dataclass
class ListTablesHeaders:
    x_amz_target: ListTablesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTablesRequest:
    headers: ListTablesHeaders = dataclasses.field()
    query_params: ListTablesQueryParams = dataclasses.field()
    request: shared_listtablesinput.ListTablesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    list_tables_output: Optional[shared_listtablesoutput.ListTablesOutput] = dataclasses.field(default=None)
    
