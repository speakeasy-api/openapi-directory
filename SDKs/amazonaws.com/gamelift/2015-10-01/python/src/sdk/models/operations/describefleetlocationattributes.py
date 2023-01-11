import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describefleetlocationattributesinput as shared_describefleetlocationattributesinput
from ..shared import describefleetlocationattributesoutput as shared_describefleetlocationattributesoutput


@dataclasses.dataclass
class DescribeFleetLocationAttributesQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeFleetLocationAttributesXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_FLEET_LOCATION_ATTRIBUTES = "GameLift.DescribeFleetLocationAttributes"


@dataclasses.dataclass
class DescribeFleetLocationAttributesHeaders:
    x_amz_target: DescribeFleetLocationAttributesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeFleetLocationAttributesRequest:
    headers: DescribeFleetLocationAttributesHeaders = dataclasses.field()
    query_params: DescribeFleetLocationAttributesQueryParams = dataclasses.field()
    request: shared_describefleetlocationattributesinput.DescribeFleetLocationAttributesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeFleetLocationAttributesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_fleet_location_attributes_output: Optional[shared_describefleetlocationattributesoutput.DescribeFleetLocationAttributesOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
