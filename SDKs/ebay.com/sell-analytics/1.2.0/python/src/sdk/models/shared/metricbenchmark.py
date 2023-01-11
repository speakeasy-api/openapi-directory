import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import benchmarkmetadata as shared_benchmarkmetadata


@dataclass_json
@dataclasses.dataclass
class MetricBenchmark:
    r"""MetricBenchmark
    This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
    """
    
    adjustment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    basis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basis') }})
    metadata: Optional[shared_benchmarkmetadata.BenchmarkMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    rating: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    
