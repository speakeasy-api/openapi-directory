import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customerservicemetricsfiltercriteria as shared_customerservicemetricsfiltercriteria


@dataclass_json
@dataclasses.dataclass
class CreateServiceMetricsTaskRequest:
    r"""CreateServiceMetricsTaskRequest
    The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
    """
    
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    filter_criteria: Optional[shared_customerservicemetricsfiltercriteria.CustomerServiceMetricsFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
