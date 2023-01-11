import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deadletterconfig as shared_deadletterconfig
from ..shared import environmentresponse as shared_environmentresponse
from ..shared import filesystemconfig as shared_filesystemconfig
from ..shared import imageconfigresponse as shared_imageconfigresponse
from ..shared import lastupdatestatus_enum as shared_lastupdatestatus_enum
from ..shared import lastupdatestatusreasoncode_enum as shared_lastupdatestatusreasoncode_enum
from ..shared import layer as shared_layer
from ..shared import packagetype_enum as shared_packagetype_enum
from ..shared import runtime_enum as shared_runtime_enum
from ..shared import state_enum as shared_state_enum
from ..shared import statereasoncode_enum as shared_statereasoncode_enum
from ..shared import tracingconfigresponse as shared_tracingconfigresponse
from ..shared import vpcconfigresponse as shared_vpcconfigresponse


@dataclass_json
@dataclasses.dataclass
class FunctionConfiguration:
    r"""FunctionConfiguration
    Details about a function's configuration.
    """
    
    code_sha256: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSha256') }})
    code_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSize') }})
    dead_letter_config: Optional[shared_deadletterconfig.DeadLetterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    environment: Optional[shared_environmentresponse.EnvironmentResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    file_system_configs: Optional[list[shared_filesystemconfig.FileSystemConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemConfigs') }})
    function_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    function_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    handler: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Handler') }})
    image_config_response: Optional[shared_imageconfigresponse.ImageConfigResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfigResponse') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyArn') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified') }})
    last_update_status: Optional[shared_lastupdatestatus_enum.LastUpdateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatus') }})
    last_update_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatusReason') }})
    last_update_status_reason_code: Optional[shared_lastupdatestatusreasoncode_enum.LastUpdateStatusReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateStatusReasonCode') }})
    layers: Optional[list[shared_layer.Layer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    master_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterArn') }})
    memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemorySize') }})
    package_type: Optional[shared_packagetype_enum.PackageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageType') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevisionId') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    runtime: Optional[shared_runtime_enum.RuntimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runtime') }})
    signing_job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningJobArn') }})
    signing_profile_version_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningProfileVersionArn') }})
    state: Optional[shared_state_enum.StateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReason') }})
    state_reason_code: Optional[shared_statereasoncode_enum.StateReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReasonCode') }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    tracing_config: Optional[shared_tracingconfigresponse.TracingConfigResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TracingConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    vpc_config: Optional[shared_vpcconfigresponse.VpcConfigResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
