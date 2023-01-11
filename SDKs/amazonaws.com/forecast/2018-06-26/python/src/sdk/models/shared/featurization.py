import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import featurizationmethod as shared_featurizationmethod


@dataclass_json
@dataclasses.dataclass
class Featurization:
    r"""Featurization
    <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>\"AttributeName\": \"demand\",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>\"FeaturizationMethodName\": \"filling\",</code> </p> <p> <code>\"FeaturizationMethodParameters\": {\"aggregation\": \"avg\", \"backfill\": \"nan\"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>
    """
    
    attribute_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    featurization_pipeline: Optional[list[shared_featurizationmethod.FeaturizationMethod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationPipeline') }})
    
