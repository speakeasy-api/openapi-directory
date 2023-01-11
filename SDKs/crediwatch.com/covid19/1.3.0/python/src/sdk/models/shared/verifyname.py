import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verifynamedata as shared_verifynamedata
from ..shared import verifynamemeta as shared_verifynamemeta


@dataclass_json
@dataclasses.dataclass
class VerifyName:
    data: list[shared_verifynamedata.VerifyNameData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: shared_verifynamemeta.VerifyNameMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
