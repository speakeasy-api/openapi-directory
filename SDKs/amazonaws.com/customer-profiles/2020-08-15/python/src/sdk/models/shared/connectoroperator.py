import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketoconnectoroperator_enum as shared_marketoconnectoroperator_enum
from ..shared import s3connectoroperator_enum as shared_s3connectoroperator_enum
from ..shared import salesforceconnectoroperator_enum as shared_salesforceconnectoroperator_enum
from ..shared import servicenowconnectoroperator_enum as shared_servicenowconnectoroperator_enum
from ..shared import zendeskconnectoroperator_enum as shared_zendeskconnectoroperator_enum


@dataclass_json
@dataclasses.dataclass
class ConnectorOperator:
    r"""ConnectorOperator
    The operation to be performed on the provided source fields.
    """
    
    marketo: Optional[shared_marketoconnectoroperator_enum.MarketoConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marketo') }})
    s3: Optional[shared_s3connectoroperator_enum.S3ConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    salesforce: Optional[shared_salesforceconnectoroperator_enum.SalesforceConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Salesforce') }})
    service_now: Optional[shared_servicenowconnectoroperator_enum.ServiceNowConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNow') }})
    zendesk: Optional[shared_zendeskconnectoroperator_enum.ZendeskConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zendesk') }})
    
