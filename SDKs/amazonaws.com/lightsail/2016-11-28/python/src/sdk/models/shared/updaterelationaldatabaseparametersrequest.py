import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabaseparameter as shared_relationaldatabaseparameter


@dataclass_json
@dataclasses.dataclass
class UpdateRelationalDatabaseParametersRequest:
    parameters: list[shared_relationaldatabaseparameter.RelationalDatabaseParameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    relational_database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    
