import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import app as shared_app


@dataclass_json
@dataclasses.dataclass
class CreateAppResult:
    app: shared_app.App = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    
