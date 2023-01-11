import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amplitudeconnectoroperator_enum as shared_amplitudeconnectoroperator_enum
from ..shared import datadogconnectoroperator_enum as shared_datadogconnectoroperator_enum
from ..shared import dynatraceconnectoroperator_enum as shared_dynatraceconnectoroperator_enum
from ..shared import googleanalyticsconnectoroperator_enum as shared_googleanalyticsconnectoroperator_enum
from ..shared import infornexusconnectoroperator_enum as shared_infornexusconnectoroperator_enum
from ..shared import marketoconnectoroperator_enum as shared_marketoconnectoroperator_enum
from ..shared import s3connectoroperator_enum as shared_s3connectoroperator_enum
from ..shared import sapodataconnectoroperator_enum as shared_sapodataconnectoroperator_enum
from ..shared import salesforceconnectoroperator_enum as shared_salesforceconnectoroperator_enum
from ..shared import servicenowconnectoroperator_enum as shared_servicenowconnectoroperator_enum
from ..shared import singularconnectoroperator_enum as shared_singularconnectoroperator_enum
from ..shared import slackconnectoroperator_enum as shared_slackconnectoroperator_enum
from ..shared import trendmicroconnectoroperator_enum as shared_trendmicroconnectoroperator_enum
from ..shared import veevaconnectoroperator_enum as shared_veevaconnectoroperator_enum
from ..shared import zendeskconnectoroperator_enum as shared_zendeskconnectoroperator_enum


@dataclass_json
@dataclasses.dataclass
class ConnectorOperator:
    r"""ConnectorOperator
     The operation to be performed on the provided source fields. 
    """
    
    amplitude: Optional[shared_amplitudeconnectoroperator_enum.AmplitudeConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[shared_datadogconnectoroperator_enum.DatadogConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[shared_dynatraceconnectoroperator_enum.DynatraceConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[shared_googleanalyticsconnectoroperator_enum.GoogleAnalyticsConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    infor_nexus: Optional[shared_infornexusconnectoroperator_enum.InforNexusConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[shared_marketoconnectoroperator_enum.MarketoConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[shared_s3connectoroperator_enum.S3ConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    sapo_data: Optional[shared_sapodataconnectoroperator_enum.SapoDataConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[shared_salesforceconnectoroperator_enum.SalesforceConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowconnectoroperator_enum.ServiceNowConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[shared_singularconnectoroperator_enum.SingularConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[shared_slackconnectoroperator_enum.SlackConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    trendmicro: Optional[shared_trendmicroconnectoroperator_enum.TrendmicroConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[shared_veevaconnectoroperator_enum.VeevaConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[shared_zendeskconnectoroperator_enum.ZendeskConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
