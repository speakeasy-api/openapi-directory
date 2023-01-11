import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionaliasassociation as shared_connectionaliasassociation
from ..shared import connectionaliasstate_enum as shared_connectionaliasstate_enum


@dataclass_json
@dataclasses.dataclass
class ConnectionAlias:
    r"""ConnectionAlias
    Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    """
    
    alias_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    associations: Optional[list[shared_connectionaliasassociation.ConnectionAliasAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Associations') }})
    connection_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionString') }})
    owner_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccountId') }})
    state: Optional[shared_connectionaliasstate_enum.ConnectionAliasStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
