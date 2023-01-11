import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uicustomizationtype as shared_uicustomizationtype


@dataclass_json
@dataclasses.dataclass
class GetUICustomizationResponse:
    ui_customization: shared_uicustomizationtype.UICustomizationType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UICustomization') }})
    
