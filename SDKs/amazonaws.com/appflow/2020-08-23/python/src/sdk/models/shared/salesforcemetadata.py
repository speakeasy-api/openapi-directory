import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SalesforceMetadata:
    r"""SalesforceMetadata
     The connector metadata specific to Salesforce. 
    """
    
    o_auth_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthScopes') }})
    
