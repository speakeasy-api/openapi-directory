import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import systemsmanageragent as shared_systemsmanageragent
from ..shared import instanceblockdevicemapping as shared_instanceblockdevicemapping
from ..shared import componentconfiguration as shared_componentconfiguration
from ..shared import createimagereciperesponse as shared_createimagereciperesponse


@dataclasses.dataclass
class CreateImageRecipeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateImageRecipeRequestBodyAdditionalInstanceConfiguration:
    r"""CreateImageRecipeRequestBodyAdditionalInstanceConfiguration
    In addition to your infrastruction configuration, these settings provide an extra layer of control over your build instances. For instances where Image Builder installs the SSM agent, you can choose whether to keep it for the AMI that you create. You can also specify commands to run on launch for all of your build instances.
    """
    
    systems_manager_agent: Optional[shared_systemsmanageragent.SystemsManagerAgent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemsManagerAgent') }})
    user_data_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDataOverride') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateImageRecipeRequestBody:
    client_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    components: list[shared_componentconfiguration.ComponentConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_image: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentImage') }})
    semantic_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('semanticVersion') }})
    additional_instance_configuration: Optional[CreateImageRecipeRequestBodyAdditionalInstanceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInstanceConfiguration') }})
    block_device_mappings: Optional[list[shared_instanceblockdevicemapping.InstanceBlockDeviceMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    working_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    

@dataclasses.dataclass
class CreateImageRecipeRequest:
    headers: CreateImageRecipeHeaders = dataclasses.field()
    request: CreateImageRecipeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateImageRecipeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    call_rate_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    client_exception: Optional[Any] = dataclasses.field(default=None)
    create_image_recipe_response: Optional[shared_createimagereciperesponse.CreateImageRecipeResponse] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_version_number_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
