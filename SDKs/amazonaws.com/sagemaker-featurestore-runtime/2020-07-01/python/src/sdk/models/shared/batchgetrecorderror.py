import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetRecordError:
    r"""BatchGetRecordError
    The error that has occurred when attempting to retrieve a batch of Records.
    """
    
    error_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    feature_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record_identifier_value_as_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierValueAsString') }})
    
