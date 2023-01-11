import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amplitudeconnectorprofilecredentials as shared_amplitudeconnectorprofilecredentials
from ..shared import datadogconnectorprofilecredentials as shared_datadogconnectorprofilecredentials
from ..shared import dynatraceconnectorprofilecredentials as shared_dynatraceconnectorprofilecredentials
from ..shared import googleanalyticsconnectorprofilecredentials as shared_googleanalyticsconnectorprofilecredentials
from ..shared import honeycodeconnectorprofilecredentials as shared_honeycodeconnectorprofilecredentials
from ..shared import infornexusconnectorprofilecredentials as shared_infornexusconnectorprofilecredentials
from ..shared import marketoconnectorprofilecredentials as shared_marketoconnectorprofilecredentials
from ..shared import redshiftconnectorprofilecredentials as shared_redshiftconnectorprofilecredentials
from ..shared import sapodataconnectorprofilecredentials as shared_sapodataconnectorprofilecredentials
from ..shared import salesforceconnectorprofilecredentials as shared_salesforceconnectorprofilecredentials
from ..shared import servicenowconnectorprofilecredentials as shared_servicenowconnectorprofilecredentials
from ..shared import singularconnectorprofilecredentials as shared_singularconnectorprofilecredentials
from ..shared import slackconnectorprofilecredentials as shared_slackconnectorprofilecredentials
from ..shared import snowflakeconnectorprofilecredentials as shared_snowflakeconnectorprofilecredentials
from ..shared import trendmicroconnectorprofilecredentials as shared_trendmicroconnectorprofilecredentials
from ..shared import veevaconnectorprofilecredentials as shared_veevaconnectorprofilecredentials
from ..shared import zendeskconnectorprofilecredentials as shared_zendeskconnectorprofilecredentials


@dataclass_json
@dataclasses.dataclass
class ConnectorProfileCredentials:
    r"""ConnectorProfileCredentials
     The connector-specific credentials required by a connector. 
    """
    
    amplitude: Optional[shared_amplitudeconnectorprofilecredentials.AmplitudeConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[shared_datadogconnectorprofilecredentials.DatadogConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[shared_dynatraceconnectorprofilecredentials.DynatraceConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[shared_googleanalyticsconnectorprofilecredentials.GoogleAnalyticsConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    honeycode: Optional[shared_honeycodeconnectorprofilecredentials.HoneycodeConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Honeycode') }})
    infor_nexus: Optional[shared_infornexusconnectorprofilecredentials.InforNexusConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[shared_marketoconnectorprofilecredentials.MarketoConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    redshift: Optional[shared_redshiftconnectorprofilecredentials.RedshiftConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redshift') }})
    sapo_data: Optional[shared_sapodataconnectorprofilecredentials.SapoDataConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[shared_salesforceconnectorprofilecredentials.SalesforceConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowconnectorprofilecredentials.ServiceNowConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[shared_singularconnectorprofilecredentials.SingularConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[shared_slackconnectorprofilecredentials.SlackConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    snowflake: Optional[shared_snowflakeconnectorprofilecredentials.SnowflakeConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snowflake') }})
    trendmicro: Optional[shared_trendmicroconnectorprofilecredentials.TrendmicroConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[shared_veevaconnectorprofilecredentials.VeevaConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[shared_zendeskconnectorprofilecredentials.ZendeskConnectorProfileCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
