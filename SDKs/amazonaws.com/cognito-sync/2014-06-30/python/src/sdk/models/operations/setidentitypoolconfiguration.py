import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamingstatus_enum as shared_streamingstatus_enum
from ..shared import setidentitypoolconfigurationresponse as shared_setidentitypoolconfigurationresponse


@dataclasses.dataclass
class SetIdentityPoolConfigurationPathParams:
    identity_pool_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetIdentityPoolConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetIdentityPoolConfigurationRequestBodyCognitoStreams:
    r"""SetIdentityPoolConfigurationRequestBodyCognitoStreams
    Configuration options for configure Cognito streams.
    """
    
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    streaming_status: Optional[shared_streamingstatus_enum.StreamingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamingStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class SetIdentityPoolConfigurationRequestBodyPushSync:
    r"""SetIdentityPoolConfigurationRequestBodyPushSync
    Configuration options to be applied to the identity pool.
    """
    
    application_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationArns') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    

@dataclass_json
@dataclasses.dataclass
class SetIdentityPoolConfigurationRequestBody:
    cognito_streams: Optional[SetIdentityPoolConfigurationRequestBodyCognitoStreams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoStreams') }})
    push_sync: Optional[SetIdentityPoolConfigurationRequestBodyPushSync] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PushSync') }})
    

@dataclasses.dataclass
class SetIdentityPoolConfigurationRequest:
    headers: SetIdentityPoolConfigurationHeaders = dataclasses.field()
    path_params: SetIdentityPoolConfigurationPathParams = dataclasses.field()
    request: SetIdentityPoolConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetIdentityPoolConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    set_identity_pool_configuration_response: Optional[shared_setidentitypoolconfigurationresponse.SetIdentityPoolConfigurationResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
