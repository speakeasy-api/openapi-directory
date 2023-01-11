import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FeatureValue:
    r"""FeatureValue
    The value associated with a feature.
    """
    
    feature_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureName') }})
    value_as_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueAsString') }})
    
