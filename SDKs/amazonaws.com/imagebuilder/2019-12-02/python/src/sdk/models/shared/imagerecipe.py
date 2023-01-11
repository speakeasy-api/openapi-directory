import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import additionalinstanceconfiguration as shared_additionalinstanceconfiguration
from ..shared import instanceblockdevicemapping as shared_instanceblockdevicemapping
from ..shared import componentconfiguration as shared_componentconfiguration
from ..shared import platform_enum as shared_platform_enum
from ..shared import imagetype_enum as shared_imagetype_enum


@dataclass_json
@dataclasses.dataclass
class ImageRecipe:
    r"""ImageRecipe
    An image recipe.
    """
    
    additional_instance_configuration: Optional[shared_additionalinstanceconfiguration.AdditionalInstanceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInstanceConfiguration') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    block_device_mappings: Optional[list[shared_instanceblockdevicemapping.InstanceBlockDeviceMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    components: Optional[list[shared_componentconfiguration.ComponentConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    parent_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentImage') }})
    platform: Optional[shared_platform_enum.PlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared_imagetype_enum.ImageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    working_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    
