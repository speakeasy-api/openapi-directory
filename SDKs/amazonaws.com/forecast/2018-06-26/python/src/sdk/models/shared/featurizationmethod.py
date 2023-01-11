import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import featurizationmethodname_enum as shared_featurizationmethodname_enum


@dataclass_json
@dataclasses.dataclass
class FeaturizationMethod:
    r"""FeaturizationMethod
    <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>\"FeaturizationMethodName\": \"filling\",</code> </p> <p> <code>\"FeaturizationMethodParameters\": {\"aggregation\": \"sum\", \"middlefill\": \"zero\", \"backfill\": \"zero\"}</code> </p> <p> <code>}</code> </p>
    """
    
    featurization_method_name: shared_featurizationmethodname_enum.FeaturizationMethodNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationMethodName') }})
    featurization_method_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationMethodParameters') }})
    
