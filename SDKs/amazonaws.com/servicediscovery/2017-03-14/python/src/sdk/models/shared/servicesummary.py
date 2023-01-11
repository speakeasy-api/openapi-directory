import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dnsconfig as shared_dnsconfig
from ..shared import healthcheckconfig as shared_healthcheckconfig
from ..shared import healthcheckcustomconfig as shared_healthcheckcustomconfig
from ..shared import servicetype_enum as shared_servicetype_enum


@dataclass_json
@dataclasses.dataclass
class ServiceSummary:
    r"""ServiceSummary
    A complex type that contains information about a specified service.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[shared_dnsconfig.DNSConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[shared_healthcheckconfig.HealthCheckConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    health_check_custom_config: Optional[shared_healthcheckcustomconfig.HealthCheckCustomConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckCustomConfig') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[shared_servicetype_enum.ServiceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
