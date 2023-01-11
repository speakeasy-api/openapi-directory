import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alloweduse as shared_alloweduse
from ..shared import imagesearchitemdisplaysize as shared_imagesearchitemdisplaysize
from ..shared import istocklicense as shared_istocklicense
from ..shared import keyword as shared_keyword
from ..shared import download as shared_download
from ..shared import maxdimensions as shared_maxdimensions
from ..shared import referraldestination as shared_referraldestination


@dataclass_json
@dataclasses.dataclass
class ImageSearchItem:
    allowed_use: Optional[shared_alloweduse.AllowedUse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_use') }})
    alternative_ids: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_ids') }})
    artist: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    asset_family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_family') }})
    call_for_image: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_for_image') }})
    caption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    collection_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_code') }})
    collection_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_id') }})
    collection_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_name') }})
    color_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color_type') }})
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    date_camera_shot: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_camera_shot'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[list[shared_imagesearchitemdisplaysize.ImageSearchItemDisplaySize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_sizes') }})
    download_product: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_product') }})
    editorial_segments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_segments') }})
    event_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_ids') }})
    graphical_style: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphical_style') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    istock_licenses: Optional[list[shared_istocklicense.IStockLicense]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istock_licenses') }})
    keywords: Optional[list[shared_keyword.Keyword]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    largest_downloads: Optional[list[shared_download.Download]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largest_downloads') }})
    license_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_model') }})
    max_dimensions: Optional[shared_maxdimensions.MaxDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_dimensions') }})
    orientation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    people: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    product_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_types') }})
    quality_rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality_rank') }})
    referral_destinations: Optional[list[shared_referraldestination.ReferralDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referral_destinations') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    uri_oembed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri_oembed') }})
    
