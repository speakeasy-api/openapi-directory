import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amplitudesourceproperties as shared_amplitudesourceproperties
from ..shared import datadogsourceproperties as shared_datadogsourceproperties
from ..shared import dynatracesourceproperties as shared_dynatracesourceproperties
from ..shared import googleanalyticssourceproperties as shared_googleanalyticssourceproperties
from ..shared import infornexussourceproperties as shared_infornexussourceproperties
from ..shared import marketosourceproperties as shared_marketosourceproperties
from ..shared import s3sourceproperties as shared_s3sourceproperties
from ..shared import sapodatasourceproperties as shared_sapodatasourceproperties
from ..shared import salesforcesourceproperties as shared_salesforcesourceproperties
from ..shared import servicenowsourceproperties as shared_servicenowsourceproperties
from ..shared import singularsourceproperties as shared_singularsourceproperties
from ..shared import slacksourceproperties as shared_slacksourceproperties
from ..shared import trendmicrosourceproperties as shared_trendmicrosourceproperties
from ..shared import veevasourceproperties as shared_veevasourceproperties
from ..shared import zendesksourceproperties as shared_zendesksourceproperties


@dataclass_json
@dataclasses.dataclass
class SourceConnectorProperties:
    r"""SourceConnectorProperties
     Specifies the information that is required to query a particular connector. 
    """
    
    amplitude: Optional[shared_amplitudesourceproperties.AmplitudeSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amplitude') }})
    datadog: Optional[shared_datadogsourceproperties.DatadogSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Datadog') }})
    dynatrace: Optional[shared_dynatracesourceproperties.DynatraceSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dynatrace') }})
    google_analytics: Optional[shared_googleanalyticssourceproperties.GoogleAnalyticsSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GoogleAnalytics') }})
    infor_nexus: Optional[shared_infornexussourceproperties.InforNexusSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InforNexus') }})
    marketo: Optional[shared_marketosourceproperties.MarketoSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[shared_s3sourceproperties.S3SourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    sapo_data: Optional[shared_sapodatasourceproperties.SapoDataSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAPOData') }})
    salesforce: Optional[shared_salesforcesourceproperties.SalesforceSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowsourceproperties.ServiceNowSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    singular: Optional[shared_singularsourceproperties.SingularSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Singular') }})
    slack: Optional[shared_slacksourceproperties.SlackSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slack') }})
    trendmicro: Optional[shared_trendmicrosourceproperties.TrendmicroSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trendmicro') }})
    veeva: Optional[shared_veevasourceproperties.VeevaSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Veeva') }})
    zendesk: Optional[shared_zendesksourceproperties.ZendeskSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
