import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userdefinedfunctioninput as shared_userdefinedfunctioninput


@dataclass_json
@dataclasses.dataclass
class UpdateUserDefinedFunctionRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    function_input: shared_userdefinedfunctioninput.UserDefinedFunctionInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionInput') }})
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
