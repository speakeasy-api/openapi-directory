import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studiocomponentconfiguration as shared_studiocomponentconfiguration
from ..shared import studiocomponentinitializationscript as shared_studiocomponentinitializationscript
from ..shared import scriptparameterkeyvalue as shared_scriptparameterkeyvalue
from ..shared import studiocomponentstate_enum as shared_studiocomponentstate_enum
from ..shared import studiocomponentstatuscode_enum as shared_studiocomponentstatuscode_enum
from ..shared import studiocomponentsubtype_enum as shared_studiocomponentsubtype_enum
from ..shared import studiocomponenttype_enum as shared_studiocomponenttype_enum


@dataclass_json
@dataclasses.dataclass
class StudioComponent:
    r"""StudioComponent
    A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    configuration: Optional[shared_studiocomponentconfiguration.StudioComponentConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ec2_security_group_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2SecurityGroupIds') }})
    initialization_scripts: Optional[list[shared_studiocomponentinitializationscript.StudioComponentInitializationScript]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationScripts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script_parameters: Optional[list[shared_scriptparameterkeyvalue.ScriptParameterKeyValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptParameters') }})
    state: Optional[shared_studiocomponentstate_enum.StudioComponentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_code: Optional[shared_studiocomponentstatuscode_enum.StudioComponentStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    studio_component_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponentId') }})
    subtype: Optional[shared_studiocomponentsubtype_enum.StudioComponentSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared_studiocomponenttype_enum.StudioComponentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
