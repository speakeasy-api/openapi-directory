import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibleenvironmenttemplate as shared_compatibleenvironmenttemplate
from ..shared import templateversionstatus_enum as shared_templateversionstatus_enum


@dataclass_json
@dataclasses.dataclass
class ServiceTemplateVersion:
    r"""ServiceTemplateVersion
    The version of a service template detail data.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    compatible_environment_templates: list[shared_compatibleenvironmenttemplate.CompatibleEnvironmentTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleEnvironmentTemplates') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    major_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    status: shared_templateversionstatus_enum.TemplateVersionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    recommended_minor_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedMinorVersion') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    
