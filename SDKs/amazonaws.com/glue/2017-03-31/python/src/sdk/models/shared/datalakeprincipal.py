import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DataLakePrincipal:
    r"""DataLakePrincipal
    The Lake Formation principal.
    """
    
    data_lake_principal_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLakePrincipalIdentifier') }})
    
