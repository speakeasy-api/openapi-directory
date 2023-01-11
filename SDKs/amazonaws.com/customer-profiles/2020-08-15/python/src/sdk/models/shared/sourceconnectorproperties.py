import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketosourceproperties as shared_marketosourceproperties
from ..shared import s3sourceproperties as shared_s3sourceproperties
from ..shared import salesforcesourceproperties as shared_salesforcesourceproperties
from ..shared import servicenowsourceproperties as shared_servicenowsourceproperties
from ..shared import zendesksourceproperties as shared_zendesksourceproperties


@dataclass_json
@dataclasses.dataclass
class SourceConnectorProperties:
    r"""SourceConnectorProperties
    Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
    """
    
    marketo: Optional[shared_marketosourceproperties.MarketoSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[shared_s3sourceproperties.S3SourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[shared_salesforcesourceproperties.SalesforceSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowsourceproperties.ServiceNowSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    zendesk: Optional[shared_zendesksourceproperties.ZendeskSourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
