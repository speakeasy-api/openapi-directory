import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitlementdataunit_enum as shared_entitlementdataunit_enum


@dataclass_json
@dataclasses.dataclass
class EntitlementData:
    r"""EntitlementData
    Data associated with an entitlement resource.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    unit: shared_entitlementdataunit_enum.EntitlementDataUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
