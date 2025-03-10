"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import marketoconnectoroperator_enum as shared_marketoconnectoroperator_enum
from ..shared import s3connectoroperator_enum as shared_s3connectoroperator_enum
from ..shared import salesforceconnectoroperator_enum as shared_salesforceconnectoroperator_enum
from ..shared import servicenowconnectoroperator_enum as shared_servicenowconnectoroperator_enum
from ..shared import zendeskconnectoroperator_enum as shared_zendeskconnectoroperator_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConnectorOperator:
    r"""The operation to be performed on the provided source fields."""
    
    marketo: Optional[shared_marketoconnectoroperator_enum.MarketoConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Marketo'), 'exclude': lambda f: f is None }})  
    s3: Optional[shared_s3connectoroperator_enum.S3ConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3'), 'exclude': lambda f: f is None }})  
    salesforce: Optional[shared_salesforceconnectoroperator_enum.SalesforceConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Salesforce'), 'exclude': lambda f: f is None }})  
    service_now: Optional[shared_servicenowconnectoroperator_enum.ServiceNowConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ServiceNow'), 'exclude': lambda f: f is None }})  
    zendesk: Optional[shared_zendeskconnectoroperator_enum.ZendeskConnectorOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Zendesk'), 'exclude': lambda f: f is None }})  
    