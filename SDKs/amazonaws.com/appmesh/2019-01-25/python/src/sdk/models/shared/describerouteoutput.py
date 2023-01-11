import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routedata as shared_routedata


@dataclass_json
@dataclasses.dataclass
class DescribeRouteOutput:
    r"""DescribeRouteOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    route: shared_routedata.RouteData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    
