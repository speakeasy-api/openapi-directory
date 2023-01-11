import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypedeclaration as shared_actiontypedeclaration


@dataclass_json
@dataclasses.dataclass
class UpdateActionTypeInput:
    action_type: shared_actiontypedeclaration.ActionTypeDeclaration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    
