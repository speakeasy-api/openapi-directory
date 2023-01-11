import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_columndatatype_enum as shared_beezup_common_columndatatype_enum
from ..shared import beezup_common_columnimportance_enum as shared_beezup_common_columnimportance_enum


@dataclass_json
@dataclasses.dataclass
class ChannelColumnConfiguration:
    r"""ChannelColumnConfiguration
    The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
    """
    
    column_data_type: shared_beezup_common_columndatatype_enum.BeezUpCommonColumnDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnDataType') }})
    column_importance: shared_beezup_common_columnimportance_enum.BeezUpCommonColumnImportanceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnImportance') }})
    beez_up_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnName') }})
    
