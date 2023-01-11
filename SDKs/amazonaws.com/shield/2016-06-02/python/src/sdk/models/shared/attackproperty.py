import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attacklayer_enum as shared_attacklayer_enum
from ..shared import attackpropertyidentifier_enum as shared_attackpropertyidentifier_enum
from ..shared import contributor as shared_contributor
from ..shared import unit_enum as shared_unit_enum


@dataclass_json
@dataclasses.dataclass
class AttackProperty:
    r"""AttackProperty
    Details of a Shield event. This is provided as part of an <a>AttackDetail</a>.
    """
    
    attack_layer: Optional[shared_attacklayer_enum.AttackLayerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackLayer') }})
    attack_property_identifier: Optional[shared_attackpropertyidentifier_enum.AttackPropertyIdentifierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackPropertyIdentifier') }})
    top_contributors: Optional[list[shared_contributor.Contributor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopContributors') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    unit: Optional[shared_unit_enum.UnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
