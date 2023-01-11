import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recommendationcategory_enum as shared_recommendationcategory_enum
from ..shared import rulemetadata as shared_rulemetadata
from ..shared import severity_enum as shared_severity_enum


@dataclass_json
@dataclasses.dataclass
class RecommendationSummary:
    r"""RecommendationSummary
     Information about recommendations. 
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    end_line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndLine') }})
    file_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilePath') }})
    recommendation_category: Optional[shared_recommendationcategory_enum.RecommendationCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationCategory') }})
    recommendation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationId') }})
    rule_metadata: Optional[shared_rulemetadata.RuleMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleMetadata') }})
    severity: Optional[shared_severity_enum.SeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    start_line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartLine') }})
    
