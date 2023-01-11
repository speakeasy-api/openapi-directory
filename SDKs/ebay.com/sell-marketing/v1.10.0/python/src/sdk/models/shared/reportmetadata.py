import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionmetadata as shared_dimensionmetadata
from ..shared import metricmetadata as shared_metricmetadata


@dataclass_json
@dataclasses.dataclass
class ReportMetadata:
    r"""ReportMetadata
    This type defines the fields included in the report.
    """
    
    dimension_metadata: Optional[list[shared_dimensionmetadata.DimensionMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetadata') }})
    max_number_of_dimensions_to_request: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfDimensionsToRequest') }})
    max_number_of_metrics_to_request: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfMetricsToRequest') }})
    metric_metadata: Optional[list[shared_metricmetadata.MetricMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricMetadata') }})
    report_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
