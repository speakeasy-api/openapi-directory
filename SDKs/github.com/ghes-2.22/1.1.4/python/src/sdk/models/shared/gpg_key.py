import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GpgKeyEmails:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

@dataclass_json
@dataclasses.dataclass
class GpgKeySubkeys:
    can_certify: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_certify') }})
    can_encrypt_comms: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_comms') }})
    can_encrypt_storage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_storage') }})
    can_sign: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_sign') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    emails: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    expires_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    primary_key_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_key_id') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    raw_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_key') }})
    subkeys: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subkeys') }})
    

@dataclass_json
@dataclasses.dataclass
class GpgKey:
    r"""GpgKey
    A unique encryption key
    """
    
    can_certify: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_certify') }})
    can_encrypt_comms: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_comms') }})
    can_encrypt_storage: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_storage') }})
    can_sign: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_sign') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    emails: list[GpgKeyEmails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    expires_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    primary_key_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_key_id') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    raw_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_key') }})
    subkeys: list[GpgKeySubkeys] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subkeys') }})
    
