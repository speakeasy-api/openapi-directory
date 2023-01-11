import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import selectaggregateresourceconfigrequest as shared_selectaggregateresourceconfigrequest
from ..shared import selectaggregateresourceconfigresponse as shared_selectaggregateresourceconfigresponse


@dataclasses.dataclass
class SelectAggregateResourceConfigQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class SelectAggregateResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_SELECT_AGGREGATE_RESOURCE_CONFIG = "StarlingDoveService.SelectAggregateResourceConfig"


@dataclasses.dataclass
class SelectAggregateResourceConfigHeaders:
    x_amz_target: SelectAggregateResourceConfigXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SelectAggregateResourceConfigRequest:
    headers: SelectAggregateResourceConfigHeaders = dataclasses.field()
    query_params: SelectAggregateResourceConfigQueryParams = dataclasses.field()
    request: shared_selectaggregateresourceconfigrequest.SelectAggregateResourceConfigRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SelectAggregateResourceConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_expression_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_configuration_aggregator_exception: Optional[Any] = dataclasses.field(default=None)
    select_aggregate_resource_config_response: Optional[shared_selectaggregateresourceconfigresponse.SelectAggregateResourceConfigResponse] = dataclasses.field(default=None)
    
