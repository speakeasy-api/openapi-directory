import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationexportconfiguration as shared_classificationexportconfiguration


@dataclass_json
@dataclasses.dataclass
class PutClassificationExportConfigurationResponse:
    configuration: Optional[shared_classificationexportconfiguration.ClassificationExportConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    
