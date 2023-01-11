import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import platformdevice as shared_platformdevice
from ..shared import tag as shared_tag
from ..shared import resource as shared_resource
from ..shared import versioninfo as shared_versioninfo


@dataclass_json
@dataclasses.dataclass
class RegisterContainerInstanceRequest:
    attributes: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    container_instance_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstanceArn') }})
    instance_identity_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentityDocument') }})
    instance_identity_document_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentityDocumentSignature') }})
    platform_devices: Optional[list[shared_platformdevice.PlatformDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformDevices') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_resources: Optional[list[shared_resource.Resource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResources') }})
    version_info: Optional[shared_versioninfo.VersionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
