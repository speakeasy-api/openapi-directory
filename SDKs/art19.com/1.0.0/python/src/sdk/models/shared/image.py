import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier

class ImageAttributesBucketTypeEnum(str, Enum):
    AD_REP_ACCOUNT = "AdRepAccount"
    AGENCY = "Agency"
    NETWORK = "Network"
    SERIES = "Series"
    USER = "User"


@dataclass_json
@dataclasses.dataclass
class ImageAttributesTheCropAreaWithinTheOriginalMediaAsset:
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    left: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    top: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    width: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
class ImageAttributesStatusEnum(str, Enum):
    INVALID = "invalid"
    PROCESSING = "processing"
    UPLOADED = "uploaded"
    VALID = "valid"


@dataclass_json
@dataclasses.dataclass
class ImageAttributes:
    bucket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket_id') }})
    bucket_type: Optional[ImageAttributesBucketTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket_type') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    crop_data: Optional[ImageAttributesTheCropAreaWithinTheOriginalMediaAsset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop_data') }})
    status: Optional[ImageAttributesStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ImageRelationshipsAllMediaAssetsAvailableForThisImage:
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ImageRelationships:
    media_assets: Optional[ImageRelationshipsAllMediaAssetsAvailableForThisImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_assets') }})
    

@dataclass_json
@dataclasses.dataclass
class Image:
    attributes: Optional[ImageAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[ImageRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
