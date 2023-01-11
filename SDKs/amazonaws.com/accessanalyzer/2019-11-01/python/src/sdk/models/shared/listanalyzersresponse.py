import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyzersummary as shared_analyzersummary


@dataclass_json
@dataclasses.dataclass
class ListAnalyzersResponse:
    r"""ListAnalyzersResponse
    The response to the request.
    """
    
    analyzers: list[shared_analyzersummary.AnalyzerSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
