import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lifecyclepolicyruleaction as shared_lifecyclepolicyruleaction


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicyPreviewResult:
    r"""LifecyclePolicyPreviewResult
    The result of the lifecycle policy preview.
    """
    
    action: Optional[shared_lifecyclepolicyruleaction.LifecyclePolicyRuleAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    applied_rule_priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedRulePriority') }})
    image_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    image_pushed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePushedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTags') }})
    
