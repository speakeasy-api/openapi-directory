import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetRecordIdentifier:
    r"""BatchGetRecordIdentifier
    The identifier that identifies the batch of Records you are retrieving in a batch.
    """
    
    feature_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record_identifiers_value_as_string: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifiersValueAsString') }})
    feature_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureNames') }})
    
