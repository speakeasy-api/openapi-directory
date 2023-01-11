import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getconfigresponse as shared_getconfigresponse

class GetConfigConfigTypeEnum(str, Enum):
    ANTENNA_DOWNLINK = "antenna-downlink"
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode"
    ANTENNA_UPLINK = "antenna-uplink"
    DATAFLOW_ENDPOINT = "dataflow-endpoint"
    TRACKING = "tracking"
    UPLINK_ECHO = "uplink-echo"
    S3_RECORDING = "s3-recording"


@dataclasses.dataclass
class GetConfigPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    config_type: GetConfigConfigTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'configType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigRequest:
    headers: GetConfigHeaders = dataclasses.field()
    path_params: GetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dependency_exception: Optional[Any] = dataclasses.field(default=None)
    get_config_response: Optional[shared_getconfigresponse.GetConfigResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
