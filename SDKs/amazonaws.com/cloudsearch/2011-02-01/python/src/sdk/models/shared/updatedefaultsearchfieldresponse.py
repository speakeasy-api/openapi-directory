import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import defaultsearchfieldstatus as shared_defaultsearchfieldstatus


@dataclasses.dataclass
class UpdateDefaultSearchFieldResponse:
    r"""UpdateDefaultSearchFieldResponse
    A response message that contains the status of an updated default search field.
    """
    
    default_search_field: shared_defaultsearchfieldstatus.DefaultSearchFieldStatus = dataclasses.field()
    
