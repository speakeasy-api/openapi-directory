import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventdimensions as shared_eventdimensions
from ..shared import filtertype_enum as shared_filtertype_enum


@dataclass_json
@dataclasses.dataclass
class CampaignEventFilter:
    r"""CampaignEventFilter
    Specifies the settings for events that cause a campaign to be sent.
    """
    
    dimensions: shared_eventdimensions.EventDimensions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    filter_type: shared_filtertype_enum.FilterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterType') }})
    
