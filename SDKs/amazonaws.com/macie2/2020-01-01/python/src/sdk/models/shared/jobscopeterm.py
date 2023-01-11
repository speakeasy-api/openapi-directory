import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplescopeterm as shared_simplescopeterm
from ..shared import tagscopeterm as shared_tagscopeterm


@dataclass_json
@dataclasses.dataclass
class JobScopeTerm:
    r"""JobScopeTerm
    Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
    """
    
    simple_scope_term: Optional[shared_simplescopeterm.SimpleScopeTerm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleScopeTerm') }})
    tag_scope_term: Optional[shared_tagscopeterm.TagScopeTerm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagScopeTerm') }})
    
