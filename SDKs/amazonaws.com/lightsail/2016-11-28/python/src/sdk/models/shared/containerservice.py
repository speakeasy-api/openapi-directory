import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicedeployment as shared_containerservicedeployment
from ..shared import resourcelocation as shared_resourcelocation
from ..shared import containerservicepowername_enum as shared_containerservicepowername_enum
from ..shared import resourcetype_enum as shared_resourcetype_enum
from ..shared import containerservicestate_enum as shared_containerservicestate_enum
from ..shared import containerservicestatedetail as shared_containerservicestatedetail
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class ContainerService:
    r"""ContainerService
    Describes an Amazon Lightsail container service.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    container_service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerServiceName') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_deployment: Optional[shared_containerservicedeployment.ContainerServiceDeployment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentDeployment') }})
    is_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDisabled') }})
    location: Optional[shared_resourcelocation.ResourceLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    next_deployment: Optional[shared_containerservicedeployment.ContainerServiceDeployment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextDeployment') }})
    power: Optional[shared_containerservicepowername_enum.ContainerServicePowerNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power') }})
    power_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerId') }})
    principal_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalArn') }})
    private_domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateDomainName') }})
    public_domain_names: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicDomainNames') }})
    resource_type: Optional[shared_resourcetype_enum.ResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    scale: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    state: Optional[shared_containerservicestate_enum.ContainerServiceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_detail: Optional[shared_containerservicestatedetail.ContainerServiceStateDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDetail') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
