import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier

class ClassificationInclusionAttributesClassificationTypeEnum(str, Enum):
    ALTERNATE_FEED_TYPE = "AlternateFeedType"
    GENRE = "Genre"
    INDUSTRY = "Industry"
    LANGUAGE = "Language"
    MEDIA_RATING = "MediaRating"

class ClassificationInclusionAttributesClassifiedTypeEnum(str, Enum):
    SERIES = "Series"
    SEASON = "Season"
    EPISODE = "Episode"


@dataclass_json
@dataclasses.dataclass
class ClassificationInclusionAttributes:
    classification_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification_id') }})
    classification_type: Optional[ClassificationInclusionAttributesClassificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification_type') }})
    classified_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classified_id') }})
    classified_type: Optional[ClassificationInclusionAttributesClassifiedTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classified_type') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassificationInclusionRelationshipsClassification:
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassificationInclusionRelationships:
    classification: Optional[ClassificationInclusionRelationshipsClassification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    

@dataclass_json
@dataclasses.dataclass
class ClassificationInclusion:
    r"""ClassificationInclusion
    Connects a Classification with a classified item like a Series, Season or Episode.
    
    """
    
    attributes: Optional[ClassificationInclusionAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[ClassificationInclusionRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
