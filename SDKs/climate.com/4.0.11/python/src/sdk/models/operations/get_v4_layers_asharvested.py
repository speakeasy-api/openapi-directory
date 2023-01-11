import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetV4LayersAsHarvestedQueryParams:
    occurred_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurredAfter', 'style': 'form', 'explode': True }})
    occurred_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'occurredBefore', 'style': 'form', 'explode': True }})
    resource_owner_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceOwnerId', 'style': 'form', 'explode': True }})
    updated_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updatedAfter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_limit: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedRequest:
    headers: GetV4LayersAsHarvestedHeaders = dataclasses.field()
    query_params: GetV4LayersAsHarvestedQueryParams = dataclasses.field()
    security: GetV4LayersAsHarvestedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    harvest_activities: Optional[Any] = dataclasses.field(default=None)
    
