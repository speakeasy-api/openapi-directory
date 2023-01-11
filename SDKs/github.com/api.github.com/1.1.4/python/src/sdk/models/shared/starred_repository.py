import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclass_json
@dataclasses.dataclass
class StarredRepository:
    r"""StarredRepository
    Starred Repository
    """
    
    repo: shared_repository.Repository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    starred_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
