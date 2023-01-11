import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advancedfieldselector as shared_advancedfieldselector


@dataclass_json
@dataclasses.dataclass
class AdvancedEventSelector:
    r"""AdvancedEventSelector
    <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p> <ul> <li> <p> <code>readOnly</code> </p> </li> <li> <p> <code>eventSource</code> </p> </li> <li> <p> <code>eventName</code> </p> </li> <li> <p> <code>eventCategory</code> </p> </li> <li> <p> <code>resources.type</code> </p> </li> <li> <p> <code>resources.ARN</code> </p> </li> </ul> <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
    """
    
    field_selectors: list[shared_advancedfieldselector.AdvancedFieldSelector] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldSelectors') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
