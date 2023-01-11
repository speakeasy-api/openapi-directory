import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_usererrormessage as shared_beezup_common_usererrormessage
from ..shared import errorresponsemessagepaymentrequiredlinks as shared_errorresponsemessagepaymentrequiredlinks


@dataclass_json
@dataclasses.dataclass
class ErrorResponseMessagePaymentRequired:
    errors: list[shared_beezup_common_usererrormessage.BeezUpCommonUserErrorMessage] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: shared_errorresponsemessagepaymentrequiredlinks.ErrorResponseMessagePaymentRequiredLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
