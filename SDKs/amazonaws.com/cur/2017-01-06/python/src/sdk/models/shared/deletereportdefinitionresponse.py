import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteReportDefinitionResponse:
    r"""DeleteReportDefinitionResponse
    If the action is successful, the service sends back an HTTP 200 response.
    """
    
    response_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseMessage') }})
    
