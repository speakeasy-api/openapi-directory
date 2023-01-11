import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import datearrayoptions as shared_datearrayoptions
from ..shared import dateoptions as shared_dateoptions
from ..shared import doublearrayoptions as shared_doublearrayoptions
from ..shared import doubleoptions as shared_doubleoptions
from ..shared import indexfieldtype_enum as shared_indexfieldtype_enum
from ..shared import intarrayoptions as shared_intarrayoptions
from ..shared import intoptions as shared_intoptions
from ..shared import latlonoptions as shared_latlonoptions
from ..shared import literalarrayoptions as shared_literalarrayoptions
from ..shared import literaloptions as shared_literaloptions
from ..shared import textarrayoptions as shared_textarrayoptions
from ..shared import textoptions as shared_textoptions


@dataclasses.dataclass
class IndexField:
    r"""IndexField
    Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
    """
    
    index_field_name: str = dataclasses.field()
    index_field_type: shared_indexfieldtype_enum.IndexFieldTypeEnum = dataclasses.field()
    date_array_options: Optional[shared_datearrayoptions.DateArrayOptions] = dataclasses.field(default=None)
    date_options: Optional[shared_dateoptions.DateOptions] = dataclasses.field(default=None)
    double_array_options: Optional[shared_doublearrayoptions.DoubleArrayOptions] = dataclasses.field(default=None)
    double_options: Optional[shared_doubleoptions.DoubleOptions] = dataclasses.field(default=None)
    int_array_options: Optional[shared_intarrayoptions.IntArrayOptions] = dataclasses.field(default=None)
    int_options: Optional[shared_intoptions.IntOptions] = dataclasses.field(default=None)
    lat_lon_options: Optional[shared_latlonoptions.LatLonOptions] = dataclasses.field(default=None)
    literal_array_options: Optional[shared_literalarrayoptions.LiteralArrayOptions] = dataclasses.field(default=None)
    literal_options: Optional[shared_literaloptions.LiteralOptions] = dataclasses.field(default=None)
    text_array_options: Optional[shared_textarrayoptions.TextArrayOptions] = dataclasses.field(default=None)
    text_options: Optional[shared_textoptions.TextOptions] = dataclasses.field(default=None)
    
