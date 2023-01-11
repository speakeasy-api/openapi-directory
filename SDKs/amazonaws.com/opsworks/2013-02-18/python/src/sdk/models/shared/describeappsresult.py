import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import app as shared_app


@dataclass_json
@dataclasses.dataclass
class DescribeAppsResult:
    r"""DescribeAppsResult
    Contains the response to a <code>DescribeApps</code> request.
    """
    
    apps: Optional[list[shared_app.App]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Apps') }})
    
