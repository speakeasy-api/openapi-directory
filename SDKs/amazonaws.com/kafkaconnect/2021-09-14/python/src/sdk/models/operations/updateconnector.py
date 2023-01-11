import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingupdate as shared_autoscalingupdate
from ..shared import provisionedcapacityupdate as shared_provisionedcapacityupdate
from ..shared import updateconnectorresponse as shared_updateconnectorresponse


@dataclasses.dataclass
class UpdateConnectorPathParams:
    connector_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'connectorArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConnectorQueryParams:
    current_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'currentVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateConnectorHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConnectorRequestBodyCapacity:
    r"""UpdateConnectorRequestBodyCapacity
    The target capacity for the connector. The capacity can be auto scaled or provisioned.
    """
    
    auto_scaling: Optional[shared_autoscalingupdate.AutoScalingUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    provisioned_capacity: Optional[shared_provisionedcapacityupdate.ProvisionedCapacityUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedCapacity') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConnectorRequestBody:
    capacity: UpdateConnectorRequestBodyCapacity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    

@dataclasses.dataclass
class UpdateConnectorRequest:
    headers: UpdateConnectorHeaders = dataclasses.field()
    path_params: UpdateConnectorPathParams = dataclasses.field()
    query_params: UpdateConnectorQueryParams = dataclasses.field()
    request: UpdateConnectorRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConnectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    update_connector_response: Optional[shared_updateconnectorresponse.UpdateConnectorResponse] = dataclasses.field(default=None)
    
