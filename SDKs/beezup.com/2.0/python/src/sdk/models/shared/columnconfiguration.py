import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_columndatatype_enum as shared_beezup_common_columndatatype_enum
from ..shared import beezup_common_columnimportance_enum as shared_beezup_common_columnimportance_enum


@dataclass_json
@dataclasses.dataclass
class ColumnConfiguration:
    r"""ColumnConfiguration
    Indicates the configuration applied on the column (catalog or custom) during the importation process.
    """
    
    column_data_type: shared_beezup_common_columndatatype_enum.BeezUpCommonColumnDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnDataType') }})
    column_importance: shared_beezup_common_columnimportance_enum.BeezUpCommonColumnImportanceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnImportance') }})
    beez_up_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnName') }})
    can_be_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canBeTruncated') }})
    column_culture_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCultureName') }})
    column_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnFormat') }})
    display_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayGroupName') }})
    
