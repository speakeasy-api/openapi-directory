import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field
from ..shared import file as shared_file
from ..shared import field as shared_field
from ..shared import file as shared_file

class FullItemCategoryEnum(str, Enum):
    LOGIN = "LOGIN"
    PASSWORD = "PASSWORD"
    API_CREDENTIAL = "API_CREDENTIAL"
    SERVER = "SERVER"
    DATABASE = "DATABASE"
    CREDIT_CARD = "CREDIT_CARD"
    MEMBERSHIP = "MEMBERSHIP"
    PASSPORT = "PASSPORT"
    SOFTWARE_LICENSE = "SOFTWARE_LICENSE"
    OUTDOOR_LICENSE = "OUTDOOR_LICENSE"
    SECURE_NOTE = "SECURE_NOTE"
    WIRELESS_ROUTER = "WIRELESS_ROUTER"
    BANK_ACCOUNT = "BANK_ACCOUNT"
    DRIVER_LICENSE = "DRIVER_LICENSE"
    IDENTITY = "IDENTITY"
    REWARD_PROGRAM = "REWARD_PROGRAM"
    DOCUMENT = "DOCUMENT"
    EMAIL_ACCOUNT = "EMAIL_ACCOUNT"
    SOCIAL_SECURITY_NUMBER = "SOCIAL_SECURITY_NUMBER"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclasses.dataclass
class FullItemSections:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclasses.dataclass
class FullItemUrls:
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    

@dataclass_json
@dataclasses.dataclass
class FullItemVault:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class FullItemStateEnum(str, Enum):
    ARCHIVED = "ARCHIVED"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class FullItemInput:
    category: FullItemCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    vault: FullItemVault = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vault') }})
    favorite: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    fields: Optional[list[shared_field.FieldInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    files: Optional[list[shared_file.FileInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sections: Optional[list[FullItemSections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    urls: Optional[list[FullItemUrls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class FullItem:
    category: FullItemCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    vault: FullItemVault = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vault') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    favorite: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    files: Optional[list[shared_file.File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEditedBy') }})
    sections: Optional[list[FullItemSections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    state: Optional[FullItemStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    urls: Optional[list[FullItemUrls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
