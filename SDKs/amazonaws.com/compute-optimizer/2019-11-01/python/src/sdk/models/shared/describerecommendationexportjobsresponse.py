import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationexportjob as shared_recommendationexportjob


@dataclass_json
@dataclasses.dataclass
class DescribeRecommendationExportJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    recommendation_export_jobs: Optional[list[shared_recommendationexportjob.RecommendationExportJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationExportJobs') }})
    
