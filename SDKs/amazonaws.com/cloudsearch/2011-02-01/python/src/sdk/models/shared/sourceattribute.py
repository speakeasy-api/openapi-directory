import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sourcedata as shared_sourcedata
from ..shared import sourcedatafunction_enum as shared_sourcedatafunction_enum
from ..shared import sourcedatamap as shared_sourcedatamap
from ..shared import sourcedatatrimtitle as shared_sourcedatatrimtitle


@dataclasses.dataclass
class SourceAttribute:
    r"""SourceAttribute
    Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
    """
    
    source_data_function: shared_sourcedatafunction_enum.SourceDataFunctionEnum = dataclasses.field()
    source_data_copy: Optional[shared_sourcedata.SourceData] = dataclasses.field(default=None)
    source_data_map: Optional[shared_sourcedatamap.SourceDataMap] = dataclasses.field(default=None)
    source_data_trim_title: Optional[shared_sourcedatatrimtitle.SourceDataTrimTitle] = dataclasses.field(default=None)
    
