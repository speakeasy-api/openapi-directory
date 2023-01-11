import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BuildStatusConfig:
    r"""BuildStatusConfig
    Contains information that defines how the CodeBuild build project reports the build status to the source provider. 
    """
    
    context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    target_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    
