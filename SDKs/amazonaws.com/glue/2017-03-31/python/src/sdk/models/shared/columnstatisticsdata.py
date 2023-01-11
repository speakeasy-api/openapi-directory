import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import binarycolumnstatisticsdata as shared_binarycolumnstatisticsdata
from ..shared import booleancolumnstatisticsdata as shared_booleancolumnstatisticsdata
from ..shared import datecolumnstatisticsdata as shared_datecolumnstatisticsdata
from ..shared import decimalcolumnstatisticsdata as shared_decimalcolumnstatisticsdata
from ..shared import doublecolumnstatisticsdata as shared_doublecolumnstatisticsdata
from ..shared import longcolumnstatisticsdata as shared_longcolumnstatisticsdata
from ..shared import stringcolumnstatisticsdata as shared_stringcolumnstatisticsdata
from ..shared import columnstatisticstype_enum as shared_columnstatisticstype_enum


@dataclass_json
@dataclasses.dataclass
class ColumnStatisticsData:
    r"""ColumnStatisticsData
    Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
    """
    
    type: shared_columnstatisticstype_enum.ColumnStatisticsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    binary_column_statistics_data: Optional[shared_binarycolumnstatisticsdata.BinaryColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BinaryColumnStatisticsData') }})
    boolean_column_statistics_data: Optional[shared_booleancolumnstatisticsdata.BooleanColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BooleanColumnStatisticsData') }})
    date_column_statistics_data: Optional[shared_datecolumnstatisticsdata.DateColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateColumnStatisticsData') }})
    decimal_column_statistics_data: Optional[shared_decimalcolumnstatisticsdata.DecimalColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecimalColumnStatisticsData') }})
    double_column_statistics_data: Optional[shared_doublecolumnstatisticsdata.DoubleColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DoubleColumnStatisticsData') }})
    long_column_statistics_data: Optional[shared_longcolumnstatisticsdata.LongColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongColumnStatisticsData') }})
    string_column_statistics_data: Optional[shared_stringcolumnstatisticsdata.StringColumnStatisticsData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringColumnStatisticsData') }})
    
