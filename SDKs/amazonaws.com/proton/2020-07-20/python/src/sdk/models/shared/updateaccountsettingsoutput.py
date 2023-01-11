import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountsettings as shared_accountsettings


@dataclass_json
@dataclasses.dataclass
class UpdateAccountSettingsOutput:
    account_settings: shared_accountsettings.AccountSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountSettings') }})
    
