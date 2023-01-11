import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookbuildtype_enum as shared_webhookbuildtype_enum
from ..shared import webhookfilter as shared_webhookfilter


@dataclass_json
@dataclasses.dataclass
class UpdateWebhookInput:
    project_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    branch_filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchFilter') }})
    build_type: Optional[shared_webhookbuildtype_enum.WebhookBuildTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    filter_groups: Optional[list[list[shared_webhookfilter.WebhookFilter]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterGroups') }})
    rotate_secret: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotateSecret') }})
    
