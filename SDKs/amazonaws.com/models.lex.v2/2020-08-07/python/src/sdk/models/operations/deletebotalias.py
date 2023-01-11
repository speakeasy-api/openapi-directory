import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import deletebotaliasresponse as shared_deletebotaliasresponse


@dataclasses.dataclass
class DeleteBotAliasPathParams:
    bot_alias_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botAliasId', 'style': 'simple', 'explode': False }})
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBotAliasQueryParams:
    skip_resource_in_use_check: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skipResourceInUseCheck', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteBotAliasHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBotAliasRequest:
    headers: DeleteBotAliasHeaders = dataclasses.field()
    path_params: DeleteBotAliasPathParams = dataclasses.field()
    query_params: DeleteBotAliasQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBotAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    delete_bot_alias_response: Optional[shared_deletebotaliasresponse.DeleteBotAliasResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
