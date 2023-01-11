import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customerprofilesdestinationproperties as shared_customerprofilesdestinationproperties
from ..shared import eventbridgedestinationproperties as shared_eventbridgedestinationproperties
from ..shared import honeycodedestinationproperties as shared_honeycodedestinationproperties
from ..shared import redshiftdestinationproperties as shared_redshiftdestinationproperties
from ..shared import s3destinationproperties as shared_s3destinationproperties
from ..shared import salesforcedestinationproperties as shared_salesforcedestinationproperties
from ..shared import snowflakedestinationproperties as shared_snowflakedestinationproperties
from ..shared import upsolverdestinationproperties as shared_upsolverdestinationproperties
from ..shared import zendeskdestinationproperties as shared_zendeskdestinationproperties


@dataclass_json
@dataclasses.dataclass
class DestinationConnectorProperties:
    r"""DestinationConnectorProperties
     This stores the information that is required to query a particular connector. 
    """
    
    customer_profiles: Optional[shared_customerprofilesdestinationproperties.CustomerProfilesDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerProfiles') }})
    event_bridge: Optional[shared_eventbridgedestinationproperties.EventBridgeDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBridge') }})
    honeycode: Optional[shared_honeycodedestinationproperties.HoneycodeDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    lookout_metrics: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookoutMetrics') }})
    redshift: Optional[shared_redshiftdestinationproperties.RedshiftDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    s3: Optional[shared_s3destinationproperties.S3DestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[shared_salesforcedestinationproperties.SalesforceDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    snowflake: Optional[shared_snowflakedestinationproperties.SnowflakeDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    upsolver: Optional[shared_upsolverdestinationproperties.UpsolverDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Upsolver') }})
    zendesk: Optional[shared_zendeskdestinationproperties.ZendeskDestinationProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
