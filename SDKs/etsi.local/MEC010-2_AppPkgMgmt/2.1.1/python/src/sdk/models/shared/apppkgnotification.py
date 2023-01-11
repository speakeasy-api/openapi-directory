import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apppkgnotification_links as shared_apppkgnotification_links
from ..shared import apppkg_notificationtype_enum as shared_apppkg_notificationtype_enum
from ..shared import timestamp as shared_timestamp

class AppPkgNotificationOperationalStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclasses.dataclass
class AppPkgNotification:
    r"""AppPkgNotification
    'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
    """
    
    links: shared_apppkgnotification_links.AppPkgNotificationLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_d_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appDId') }})
    app_pkg_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notification_type: shared_apppkg_notificationtype_enum.AppPkgNotificationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    operational_state: AppPkgNotificationOperationalStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationalState') }})
    subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    time_stamp: shared_timestamp.TimeStamp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamp') }})
    
