import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import featurevalue as shared_featurevalue


@dataclass_json
@dataclasses.dataclass
class BatchGetRecordResultDetail:
    r"""BatchGetRecordResultDetail
    The output of Records that have been retrieved in a batch.
    """
    
    feature_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureGroupName') }})
    record: list[shared_featurevalue.FeatureValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Record') }})
    record_identifier_value_as_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordIdentifierValueAsString') }})
    
