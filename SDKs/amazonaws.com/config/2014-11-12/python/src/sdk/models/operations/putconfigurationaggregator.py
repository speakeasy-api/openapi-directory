import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putconfigurationaggregatorrequest as shared_putconfigurationaggregatorrequest
from ..shared import putconfigurationaggregatorresponse as shared_putconfigurationaggregatorresponse

class PutConfigurationAggregatorXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFIGURATION_AGGREGATOR = "StarlingDoveService.PutConfigurationAggregator"


@dataclasses.dataclass
class PutConfigurationAggregatorHeaders:
    x_amz_target: PutConfigurationAggregatorXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutConfigurationAggregatorRequest:
    headers: PutConfigurationAggregatorHeaders = dataclasses.field()
    request: shared_putconfigurationaggregatorrequest.PutConfigurationAggregatorRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutConfigurationAggregatorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_available_organization_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    organization_all_features_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    put_configuration_aggregator_response: Optional[shared_putconfigurationaggregatorresponse.PutConfigurationAggregatorResponse] = dataclasses.field(default=None)
    
