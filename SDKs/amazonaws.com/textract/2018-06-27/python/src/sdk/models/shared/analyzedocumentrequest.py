import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import document as shared_document
from ..shared import featuretype_enum as shared_featuretype_enum
from ..shared import humanloopconfig as shared_humanloopconfig


@dataclass_json
@dataclasses.dataclass
class AnalyzeDocumentRequest:
    document: shared_document.Document = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Document') }})
    feature_types: list[shared_featuretype_enum.FeatureTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureTypes') }})
    human_loop_config: Optional[shared_humanloopconfig.HumanLoopConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopConfig') }})
    
