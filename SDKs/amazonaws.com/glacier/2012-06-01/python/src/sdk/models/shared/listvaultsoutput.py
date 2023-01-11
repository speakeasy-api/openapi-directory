import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import describevaultoutput as shared_describevaultoutput


@dataclass_json
@dataclasses.dataclass
class ListVaultsOutput:
    r"""ListVaultsOutput
    Contains the Amazon S3 Glacier response to your request.
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    vault_list: Optional[list[shared_describevaultoutput.DescribeVaultOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VaultList') }})
    
