import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentaccountconnection as shared_environmentaccountconnection


@dataclass_json
@dataclasses.dataclass
class UpdateEnvironmentAccountConnectionOutput:
    environment_account_connection: shared_environmentaccountconnection.EnvironmentAccountConnection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnection') }})
    
