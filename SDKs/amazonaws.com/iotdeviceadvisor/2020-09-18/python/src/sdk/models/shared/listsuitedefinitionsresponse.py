import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suitedefinitioninformation as shared_suitedefinitioninformation


@dataclass_json
@dataclasses.dataclass
class ListSuiteDefinitionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    suite_definition_information_list: Optional[list[shared_suitedefinitioninformation.SuiteDefinitionInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionInformationList') }})
    
