import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SentimentAnalysisSettings:
    r"""SentimentAnalysisSettings
    Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
    """
    
    detect_sentiment: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    
