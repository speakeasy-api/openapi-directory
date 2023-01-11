import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inappmessagecontent as shared_inappmessagecontent
from ..shared import layout_enum as shared_layout_enum
from ..shared import templatetype_enum as shared_templatetype_enum


@dataclass_json
@dataclasses.dataclass
class InAppTemplateResponse:
    r"""InAppTemplateResponse
    In-App Template Response.
    """
    
    creation_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_type: shared_templatetype_enum.TemplateTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateType') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    content: Optional[list[shared_inappmessagecontent.InAppMessageContent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    custom_config: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomConfig') }})
    layout: Optional[shared_layout_enum.LayoutEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layout') }})
    template_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
