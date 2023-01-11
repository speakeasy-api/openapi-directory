import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicecertificateupdateaction_enum as shared_devicecertificateupdateaction_enum


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCertificateParams:
    r"""UpdateDeviceCertificateParams
    Parameters to define a mitigation action that changes the state of the device certificate to inactive.
    """
    
    action: shared_devicecertificateupdateaction_enum.DeviceCertificateUpdateActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
