import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatecompliancebyconformancepack as shared_aggregatecompliancebyconformancepack


@dataclass_json
@dataclasses.dataclass
class DescribeAggregateComplianceByConformancePacksResponse:
    aggregate_compliance_by_conformance_packs: Optional[list[shared_aggregatecompliancebyconformancepack.AggregateComplianceByConformancePack]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateComplianceByConformancePacks') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
