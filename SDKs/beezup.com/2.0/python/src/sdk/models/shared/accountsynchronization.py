import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AccountSynchronization:
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    marketplace_business_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceBusinessCode') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    completed_harvest_synchro_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedHarvestSynchroUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
