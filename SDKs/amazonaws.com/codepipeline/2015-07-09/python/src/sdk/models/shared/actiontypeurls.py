import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionTypeUrls:
    r"""ActionTypeUrls
    Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.
    """
    
    configuration_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationUrl') }})
    entity_url_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityUrlTemplate') }})
    execution_url_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionUrlTemplate') }})
    revision_url_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionUrlTemplate') }})
    
