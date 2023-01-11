import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datadogconnectorprofileproperties as shared_datadogconnectorprofileproperties
from ..shared import dynatraceconnectorprofileproperties as shared_dynatraceconnectorprofileproperties
from ..shared import infornexusconnectorprofileproperties as shared_infornexusconnectorprofileproperties
from ..shared import marketoconnectorprofileproperties as shared_marketoconnectorprofileproperties
from ..shared import redshiftconnectorprofileproperties as shared_redshiftconnectorprofileproperties
from ..shared import sapodataconnectorprofileproperties as shared_sapodataconnectorprofileproperties
from ..shared import salesforceconnectorprofileproperties as shared_salesforceconnectorprofileproperties
from ..shared import servicenowconnectorprofileproperties as shared_servicenowconnectorprofileproperties
from ..shared import slackconnectorprofileproperties as shared_slackconnectorprofileproperties
from ..shared import snowflakeconnectorprofileproperties as shared_snowflakeconnectorprofileproperties
from ..shared import veevaconnectorprofileproperties as shared_veevaconnectorprofileproperties
from ..shared import zendeskconnectorprofileproperties as shared_zendeskconnectorprofileproperties


@dataclass_json
@dataclasses.dataclass
class ConnectorProfileProperties:
    r"""ConnectorProfileProperties
     The connector-specific profile properties required by each connector. 
    """
    
    amplitude: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[shared_datadogconnectorprofileproperties.DatadogConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[shared_dynatraceconnectorprofileproperties.DynatraceConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    honeycode: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    infor_nexus: Optional[shared_infornexusconnectorprofileproperties.InforNexusConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[shared_marketoconnectorprofileproperties.MarketoConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    redshift: Optional[shared_redshiftconnectorprofileproperties.RedshiftConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    sapo_data: Optional[shared_sapodataconnectorprofileproperties.SapoDataConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[shared_salesforceconnectorprofileproperties.SalesforceConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowconnectorprofileproperties.ServiceNowConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[shared_slackconnectorprofileproperties.SlackConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    snowflake: Optional[shared_snowflakeconnectorprofileproperties.SnowflakeConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    trendmicro: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[shared_veevaconnectorprofileproperties.VeevaConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[shared_zendeskconnectorprofileproperties.ZendeskConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
