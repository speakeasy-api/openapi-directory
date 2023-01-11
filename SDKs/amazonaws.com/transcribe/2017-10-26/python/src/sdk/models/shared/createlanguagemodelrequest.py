import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basemodelname_enum as shared_basemodelname_enum
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import clmlanguagecode_enum as shared_clmlanguagecode_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateLanguageModelRequest:
    base_model_name: shared_basemodelname_enum.BaseModelNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseModelName') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: shared_clmlanguagecode_enum.ClmLanguageCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
