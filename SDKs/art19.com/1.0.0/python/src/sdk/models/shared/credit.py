import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier

class CreditAttributesCreditableTypeEnum(str, Enum):
    SERIES = "Series"
    SEASON = "Season"
    EPISODE = "Episode"

class CreditAttributesTypeEnum(str, Enum):
    ANCHOR_CREDIT = "AnchorCredit"
    ASSOCIATE_PRODUCER_CREDIT = "AssociateProducerCredit"
    AUTHOR_CREDIT = "AuthorCredit"
    CAST_CREDIT = "CastCredit"
    CO_HOST_CREDIT = "CoHostCredit"
    COMPOSER_CREDIT = "ComposerCredit"
    CREATOR_CREDIT = "CreatorCredit"
    CREDIT = "Credit"
    DIRECTOR_CREDIT = "DirectorCredit"
    EDITOR_CREDIT = "EditorCredit"
    ENGINEER_CREDIT = "EngineerCredit"
    EXECUTIVE_PRODUCER_CREDIT = "ExecutiveProducerCredit"
    GUEST_CO_HOST_CREDIT = "GuestCoHostCredit"
    GUEST_CREDIT = "GuestCredit"
    GUEST_HOST_CREDIT = "GuestHostCredit"
    HEAD_WRITER_CREDIT = "HeadWriterCredit"
    HOST_CREDIT = "HostCredit"
    PRODUCER_CREDIT = "ProducerCredit"
    REPORTER_CREDIT = "ReporterCredit"
    SENIOR_PRODUCER_CREDIT = "SeniorProducerCredit"
    SIDEKICK_CREDIT = "SidekickCredit"
    VIDEO_PRODUCER_CREDIT = "VideoProducerCredit"
    WRITER_CREDIT = "WriterCredit"


@dataclass_json
@dataclasses.dataclass
class CreditAttributes:
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creditable_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditable_id') }})
    creditable_type: Optional[CreditAttributesCreditableTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditable_type') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    type: Optional[CreditAttributesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class CreditRelationshipsPerson:
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreditRelationships:
    person: Optional[CreditRelationshipsPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    

@dataclass_json
@dataclasses.dataclass
class Credit:
    r"""Credit
    A credit links a specific person to a series, season, or episode in a specific role.
    
    """
    
    attributes: Optional[CreditAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: Optional[CreditRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
