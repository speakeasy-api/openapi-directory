import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import application as shared_application
from ..shared import resourceerror as shared_resourceerror
from ..shared import imagepermissions as shared_imagepermissions
from ..shared import platformtype_enum as shared_platformtype_enum
from ..shared import imagestate_enum as shared_imagestate_enum
from ..shared import imagestatechangereason as shared_imagestatechangereason
from ..shared import visibilitytype_enum as shared_visibilitytype_enum


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    Describes an image.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    applications: Optional[list[shared_application.Application]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    appstream_agent_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppstreamAgentVersion') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    base_image_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseImageArn') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    image_builder_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageBuilderName') }})
    image_builder_supported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageBuilderSupported') }})
    image_errors: Optional[list[shared_resourceerror.ResourceError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageErrors') }})
    image_permissions: Optional[shared_imagepermissions.ImagePermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImagePermissions') }})
    platform: Optional[shared_platformtype_enum.PlatformTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    public_base_image_released_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicBaseImageReleasedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[shared_imagestate_enum.ImageStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[shared_imagestatechangereason.ImageStateChangeReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    visibility: Optional[shared_visibilitytype_enum.VisibilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Visibility') }})
    
