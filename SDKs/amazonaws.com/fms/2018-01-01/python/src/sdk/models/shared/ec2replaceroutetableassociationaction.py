import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class Ec2ReplaceRouteTableAssociationAction:
    r"""Ec2ReplaceRouteTableAssociationAction
    Information about the ReplaceRouteTableAssociation action in Amazon EC2.
    """
    
    association_id: shared_actiontarget.ActionTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    route_table_id: shared_actiontarget.ActionTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
