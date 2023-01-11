import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactdetail as shared_contactdetail
from ..shared import nameserver as shared_nameserver


@dataclass_json
@dataclasses.dataclass
class GetDomainDetailResponse:
    r"""GetDomainDetailResponse
    The GetDomainDetail response includes the following elements.
    """
    
    admin_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminContact') }})
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    nameservers: list[shared_nameserver.Nameserver] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nameservers') }})
    registrant_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantContact') }})
    tech_contact: shared_contactdetail.ContactDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechContact') }})
    abuse_contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbuseContactEmail') }})
    abuse_contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbuseContactPhone') }})
    admin_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminPrivacy') }})
    auto_renew: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoRenew') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dns_sec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsSec') }})
    expiration_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registrant_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrantPrivacy') }})
    registrar_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrarName') }})
    registrar_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrarUrl') }})
    registry_domain_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryDomainId') }})
    reseller: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reseller') }})
    status_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusList') }})
    tech_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TechPrivacy') }})
    updated_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    who_is_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhoIsServer') }})
    
