import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import casedetails as shared_casedetails


@dataclass_json
@dataclasses.dataclass
class DescribeCasesResponse:
    r"""DescribeCasesResponse
    Returns an array of <a href=\"https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html\">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.
    """
    
    cases: Optional[list[shared_casedetails.CaseDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
