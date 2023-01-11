import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceaccesscontrolattributeconfiguration as shared_instanceaccesscontrolattributeconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateInstanceAccessControlAttributeConfigurationRequest:
    instance_access_control_attribute_configuration: shared_instanceaccesscontrolattributeconfiguration.InstanceAccessControlAttributeConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceAccessControlAttributeConfiguration') }})
    instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceArn') }})
    
