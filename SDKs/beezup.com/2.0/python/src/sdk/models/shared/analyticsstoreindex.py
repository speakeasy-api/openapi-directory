import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsstoreindexlinks as shared_analyticsstoreindexlinks


@dataclass_json
@dataclasses.dataclass
class AnalyticsStoreIndex:
    links: shared_analyticsstoreindexlinks.AnalyticsStoreIndexLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
