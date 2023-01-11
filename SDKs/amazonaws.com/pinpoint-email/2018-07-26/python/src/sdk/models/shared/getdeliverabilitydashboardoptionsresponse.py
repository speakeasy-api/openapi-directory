import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverabilitydashboardaccountstatus_enum as shared_deliverabilitydashboardaccountstatus_enum
from ..shared import domaindeliverabilitytrackingoption as shared_domaindeliverabilitytrackingoption


@dataclass_json
@dataclasses.dataclass
class GetDeliverabilityDashboardOptionsResponse:
    r"""GetDeliverabilityDashboardOptionsResponse
    An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
    """
    
    dashboard_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DashboardEnabled') }})
    account_status: Optional[shared_deliverabilitydashboardaccountstatus_enum.DeliverabilityDashboardAccountStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountStatus') }})
    active_subscribed_domains: Optional[list[shared_domaindeliverabilitytrackingoption.DomainDeliverabilityTrackingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveSubscribedDomains') }})
    pending_expiration_subscribed_domains: Optional[list[shared_domaindeliverabilitytrackingoption.DomainDeliverabilityTrackingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingExpirationSubscribedDomains') }})
    subscription_expiry_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionExpiryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
