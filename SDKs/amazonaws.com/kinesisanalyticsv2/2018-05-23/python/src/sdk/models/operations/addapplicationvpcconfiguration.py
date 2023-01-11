import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addapplicationvpcconfigurationrequest as shared_addapplicationvpcconfigurationrequest
from ..shared import addapplicationvpcconfigurationresponse as shared_addapplicationvpcconfigurationresponse

class AddApplicationVpcConfigurationXAmzTargetEnum(str, Enum):
    KINESIS_ANALYTICS_20180523_ADD_APPLICATION_VPC_CONFIGURATION = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"


@dataclasses.dataclass
class AddApplicationVpcConfigurationHeaders:
    x_amz_target: AddApplicationVpcConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddApplicationVpcConfigurationRequest:
    headers: AddApplicationVpcConfigurationHeaders = dataclasses.field()
    request: shared_addapplicationvpcconfigurationrequest.AddApplicationVpcConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddApplicationVpcConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_application_vpc_configuration_response: Optional[shared_addapplicationvpcconfigurationresponse.AddApplicationVpcConfigurationResponse] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_application_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
