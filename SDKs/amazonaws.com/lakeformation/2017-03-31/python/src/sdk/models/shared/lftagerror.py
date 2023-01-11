import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail
from ..shared import lftagpair as shared_lftagpair


@dataclass_json
@dataclasses.dataclass
class LfTagError:
    r"""LfTagError
    A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
    """
    
    error: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    lf_tag: Optional[shared_lftagpair.LfTagPair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTag') }})
    
