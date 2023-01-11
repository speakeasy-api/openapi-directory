import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storelinks as shared_storelinks
from ..shared import storestatus_enum as shared_storestatus_enum
from ..shared import storeuserrole_enum as shared_storeuserrole_enum


@dataclass_json
@dataclasses.dataclass
class Store:
    country_iso_code_alpha3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryIsoCodeAlpha3') }})
    creation_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    go_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('goVersion') }})
    links: shared_storelinks.StoreLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offer_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerName') }})
    owner_user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerUserId') }})
    sectors: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectors') }})
    share_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareCount') }})
    status: shared_storestatus_enum.StoreStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeId') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_role: shared_storeuserrole_enum.StoreUserRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRole') }})
    
