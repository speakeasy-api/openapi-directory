import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alloweduse as shared_alloweduse
from ..shared import videosearchitemdisplaysize as shared_videosearchitemdisplaysize
from ..shared import istocklicense as shared_istocklicense
from ..shared import keyword as shared_keyword
from ..shared import download as shared_download
from ..shared import referraldestination as shared_referraldestination


@dataclass_json
@dataclasses.dataclass
class EditorialVideoSearchItem:
    allowed_use: Optional[shared_alloweduse.AllowedUse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_use') }})
    artist: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    asset_family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_family') }})
    caption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    clip_length: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clip_length') }})
    collection_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_code') }})
    collection_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_id') }})
    collection_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_name') }})
    color_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color_type') }})
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[list[shared_videosearchitemdisplaysize.VideoSearchItemDisplaySize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_sizes') }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_product') }})
    era: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('era') }})
    event_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_ids') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    istock_licenses: Optional[list[shared_istocklicense.IStockLicense]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istock_licenses') }})
    keywords: Optional[list[shared_keyword.Keyword]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    largest_downloads: Optional[list[shared_download.Download]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largest_downloads') }})
    license_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_model') }})
    mastered_to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mastered_to') }})
    originally_shot_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originally_shot_on') }})
    product_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_types') }})
    referral_destinations: Optional[list[shared_referraldestination.ReferralDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referral_destinations') }})
    shot_speed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shot_speed') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
