import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Ipv6CidrBlockAssociation:
    r"""Ipv6CidrBlockAssociation
    An IPV6 CIDR block association.
    """
    
    association_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    cidr_block_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrBlockState') }})
    ipv6_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6CidrBlock') }})
    
