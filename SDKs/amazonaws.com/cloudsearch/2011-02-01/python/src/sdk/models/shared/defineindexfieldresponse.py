import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import indexfieldstatus as shared_indexfieldstatus


@dataclasses.dataclass
class DefineIndexFieldResponse:
    r"""DefineIndexFieldResponse
    A response message that contains the status of an updated index field.
    """
    
    index_field: shared_indexfieldstatus.IndexFieldStatus = dataclasses.field()
    
