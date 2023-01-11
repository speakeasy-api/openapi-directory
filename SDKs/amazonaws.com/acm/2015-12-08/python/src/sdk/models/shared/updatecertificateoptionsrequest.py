import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateoptions as shared_certificateoptions


@dataclass_json
@dataclasses.dataclass
class UpdateCertificateOptionsRequest:
    certificate_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    options: shared_certificateoptions.CertificateOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    
