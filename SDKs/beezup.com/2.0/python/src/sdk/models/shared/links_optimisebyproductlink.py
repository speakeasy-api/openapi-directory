import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import beezup_common_httpmethod_enum as shared_beezup_common_httpmethod_enum
from ..shared import beezup_common_linkparameter3 as shared_beezup_common_linkparameter3


@dataclass_json
@dataclasses.dataclass
class LinksOptimiseByProductLink:
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    all_optional_params_provided: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allOptionalParamsProvided') }})
    all_required_params_provided: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allRequiredParamsProvided') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    doc_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docUrl') }})
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    method: Optional[shared_beezup_common_httpmethod_enum.BeezUpCommonHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    parameters: Optional[dict[str, shared_beezup_common_linkparameter3.BeezUpCommonLinkParameter3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    url_templated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlTemplated') }})
    
