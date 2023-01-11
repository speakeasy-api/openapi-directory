import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingconfigurationsummary as shared_autoscalingconfigurationsummary
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import healthcheckconfiguration as shared_healthcheckconfiguration
from ..shared import instanceconfiguration as shared_instanceconfiguration
from ..shared import sourceconfiguration as shared_sourceconfiguration
from ..shared import servicestatus_enum as shared_servicestatus_enum


@dataclass_json
@dataclasses.dataclass
class Service:
    r"""Service
    <p>Describes an AWS App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html\">CreateService</a>, <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html\">DescribeService</a>, and <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html\">DeleteService</a> actions. A subset of this information is returned by the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html\">ListServices</a> action using the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html\">ServiceSummary</a> type.</p>
    """
    
    auto_scaling_configuration_summary: shared_autoscalingconfigurationsummary.AutoScalingConfigurationSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationSummary') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instance_configuration: shared_instanceconfiguration.InstanceConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    service_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    service_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceId') }})
    service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUrl') }})
    source_configuration: shared_sourceconfiguration.SourceConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    status: shared_servicestatus_enum.ServiceStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    health_check_configuration: Optional[shared_healthcheckconfiguration.HealthCheckConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    
