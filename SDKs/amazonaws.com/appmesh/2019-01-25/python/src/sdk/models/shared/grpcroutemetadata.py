import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroutemetadatamatchmethod as shared_grpcroutemetadatamatchmethod


@dataclass_json
@dataclasses.dataclass
class GrpcRouteMetadata:
    r"""GrpcRouteMetadata
    An object that represents the match metadata for the route.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    invert: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invert') }})
    match: Optional[shared_grpcroutemetadatamatchmethod.GrpcRouteMetadataMatchMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
