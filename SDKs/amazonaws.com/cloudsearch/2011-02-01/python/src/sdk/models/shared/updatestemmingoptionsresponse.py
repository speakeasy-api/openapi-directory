import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import stemmingoptionsstatus as shared_stemmingoptionsstatus


@dataclasses.dataclass
class UpdateStemmingOptionsResponse:
    r"""UpdateStemmingOptionsResponse
    A response message that contains the status of updated stemming options.
    """
    
    stems: shared_stemmingoptionsstatus.StemmingOptionsStatus = dataclasses.field()
    
