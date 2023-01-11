import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_columndatatype_enum as shared_beezup_common_columndatatype_enum
from ..shared import beezup_common_columnimportance_enum as shared_beezup_common_columnimportance_enum


@dataclass_json
@dataclasses.dataclass
class BeezUpColumnConfiguration:
    r"""BeezUpColumnConfiguration
    Describe a BeezUP column
    """
    
    beez_up_column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnName') }})
    column_importance: shared_beezup_common_columnimportance_enum.BeezUpCommonColumnImportanceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnImportance') }})
    display_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayGroupName') }})
    can_be_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canBeTruncated') }})
    column_data_type: Optional[shared_beezup_common_columndatatype_enum.BeezUpCommonColumnDataTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnDataType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    unique: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique') }})
    
