import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portalresource as shared_portalresource
from ..shared import projectresource as shared_projectresource


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    Contains an IoT SiteWise Monitor resource ID for a portal or project.
    """
    
    portal: Optional[shared_portalresource.PortalResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portal') }})
    project: Optional[shared_projectresource.ProjectResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
