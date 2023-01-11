import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcconfiguration as shared_vpcconfiguration


@dataclass_json
@dataclasses.dataclass
class UpdateHostInput:
    host_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostArn') }})
    provider_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderEndpoint') }})
    vpc_configuration: Optional[shared_vpcconfiguration.VpcConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
