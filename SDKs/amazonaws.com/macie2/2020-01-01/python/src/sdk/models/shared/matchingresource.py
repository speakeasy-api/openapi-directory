import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchingbucket as shared_matchingbucket


@dataclass_json
@dataclasses.dataclass
class MatchingResource:
    r"""MatchingResource
    Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes.
    """
    
    matching_bucket: Optional[shared_matchingbucket.MatchingBucket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingBucket') }})
    
