import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import stopwordoptionsstatus as shared_stopwordoptionsstatus


@dataclasses.dataclass
class UpdateStopwordOptionsResponse:
    r"""UpdateStopwordOptionsResponse
    A response message that contains the status of updated stopword options.
    """
    
    stopwords: shared_stopwordoptionsstatus.StopwordOptionsStatus = dataclasses.field()
    
