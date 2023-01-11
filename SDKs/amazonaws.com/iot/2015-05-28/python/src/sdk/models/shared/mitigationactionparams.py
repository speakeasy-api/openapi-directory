import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addthingstothinggroupparams as shared_addthingstothinggroupparams
from ..shared import enableiotloggingparams as shared_enableiotloggingparams
from ..shared import publishfindingtosnsparams as shared_publishfindingtosnsparams
from ..shared import replacedefaultpolicyversionparams as shared_replacedefaultpolicyversionparams
from ..shared import updatecacertificateparams as shared_updatecacertificateparams
from ..shared import updatedevicecertificateparams as shared_updatedevicecertificateparams


@dataclass_json
@dataclasses.dataclass
class MitigationActionParams:
    r"""MitigationActionParams
    The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    """
    
    add_things_to_thing_group_params: Optional[shared_addthingstothinggroupparams.AddThingsToThingGroupParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addThingsToThingGroupParams') }})
    enable_io_t_logging_params: Optional[shared_enableiotloggingparams.EnableIoTLoggingParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIoTLoggingParams') }})
    publish_finding_to_sns_params: Optional[shared_publishfindingtosnsparams.PublishFindingToSnsParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingToSnsParams') }})
    replace_default_policy_version_params: Optional[shared_replacedefaultpolicyversionparams.ReplaceDefaultPolicyVersionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDefaultPolicyVersionParams') }})
    update_ca_certificate_params: Optional[shared_updatecacertificateparams.UpdateCaCertificateParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCACertificateParams') }})
    update_device_certificate_params: Optional[shared_updatedevicecertificateparams.UpdateDeviceCertificateParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeviceCertificateParams') }})
    
