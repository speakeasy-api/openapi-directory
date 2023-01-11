import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchconfiguration as shared_launchconfiguration


@dataclasses.dataclass
class UpdateLaunchConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum(str, Enum):
    STOPPED = "STOPPED"
    STARTED = "STARTED"


@dataclass_json
@dataclasses.dataclass
class UpdateLaunchConfigurationRequestBodyLicensing:
    r"""UpdateLaunchConfigurationRequestBodyLicensing
    Configure Licensing.
    """
    
    os_byol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osByol') }})
    
class UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum(str, Enum):
    NONE = "NONE"
    BASIC = "BASIC"


@dataclass_json
@dataclasses.dataclass
class UpdateLaunchConfigurationRequestBody:
    source_server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    copy_private_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyPrivateIp') }})
    copy_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyTags') }})
    launch_disposition: Optional[UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchDisposition') }})
    licensing: Optional[UpdateLaunchConfigurationRequestBodyLicensing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensing') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_instance_type_right_sizing_method: Optional[UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetInstanceTypeRightSizingMethod') }})
    

@dataclasses.dataclass
class UpdateLaunchConfigurationRequest:
    headers: UpdateLaunchConfigurationHeaders = dataclasses.field()
    request: UpdateLaunchConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLaunchConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    launch_configuration: Optional[shared_launchconfiguration.LaunchConfiguration] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    uninitialized_account_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
