import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditcheckconfiguration as shared_auditcheckconfiguration
from ..shared import auditnotificationtarget as shared_auditnotificationtarget


@dataclass_json
@dataclasses.dataclass
class DescribeAccountAuditConfigurationResponse:
    audit_check_configurations: Optional[dict[str, shared_auditcheckconfiguration.AuditCheckConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckConfigurations') }})
    audit_notification_target_configurations: Optional[dict[str, shared_auditnotificationtarget.AuditNotificationTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditNotificationTargetConfigurations') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
