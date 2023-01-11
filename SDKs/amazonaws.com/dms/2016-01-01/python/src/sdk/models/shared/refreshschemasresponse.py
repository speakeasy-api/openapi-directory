import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import refreshschemasstatus as shared_refreshschemasstatus


@dataclass_json
@dataclasses.dataclass
class RefreshSchemasResponse:
    r"""RefreshSchemasResponse
    <p/>
    """
    
    refresh_schemas_status: Optional[shared_refreshschemasstatus.RefreshSchemasStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshSchemasStatus') }})
    
