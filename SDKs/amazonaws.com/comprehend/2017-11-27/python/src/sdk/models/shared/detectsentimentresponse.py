import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentimenttype_enum as shared_sentimenttype_enum
from ..shared import sentimentscore as shared_sentimentscore


@dataclass_json
@dataclasses.dataclass
class DetectSentimentResponse:
    sentiment: Optional[shared_sentimenttype_enum.SentimentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiment') }})
    sentiment_score: Optional[shared_sentimentscore.SentimentScore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentScore') }})
    
