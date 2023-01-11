import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectormodelconfiguration as shared_detectormodelconfiguration
from ..shared import detectormodeldefinition as shared_detectormodeldefinition


@dataclass_json
@dataclasses.dataclass
class DetectorModel:
    r"""DetectorModel
    Information about the detector model.
    """
    
    detector_model_configuration: Optional[shared_detectormodelconfiguration.DetectorModelConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelConfiguration') }})
    detector_model_definition: Optional[shared_detectormodeldefinition.DetectorModelDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectorModelDefinition') }})
    
