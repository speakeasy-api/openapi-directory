import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatemode_enum as shared_certificatemode_enum
from ..shared import certificatestatus_enum as shared_certificatestatus_enum
from ..shared import transferdata as shared_transferdata
from ..shared import certificatevalidity as shared_certificatevalidity


@dataclass_json
@dataclasses.dataclass
class CertificateDescription:
    r"""CertificateDescription
    Describes a certificate.
    """
    
    ca_certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCertificateId') }})
    certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    certificate_mode: Optional[shared_certificatemode_enum.CertificateModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateMode') }})
    certificate_pem: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePem') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    customer_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerVersion') }})
    generation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generationId') }})
    last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owned_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownedBy') }})
    previous_owned_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousOwnedBy') }})
    status: Optional[shared_certificatestatus_enum.CertificateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transfer_data: Optional[shared_transferdata.TransferData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferData') }})
    validity: Optional[shared_certificatevalidity.CertificateValidity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    
