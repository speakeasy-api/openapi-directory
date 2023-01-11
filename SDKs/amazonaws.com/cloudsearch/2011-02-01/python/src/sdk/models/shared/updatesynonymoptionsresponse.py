import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import synonymoptionsstatus as shared_synonymoptionsstatus


@dataclasses.dataclass
class UpdateSynonymOptionsResponse:
    r"""UpdateSynonymOptionsResponse
    A response message that contains the status of updated synonym options.
    """
    
    synonyms: shared_synonymoptionsstatus.SynonymOptionsStatus = dataclasses.field()
    
