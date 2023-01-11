import dataclasses
from typing import Optional
from ..shared import optionslist as shared_optionslist


@dataclasses.dataclass
class OptionGroup:
    allows_vpc_and_non_vpc_instance_memberships: Optional[bool] = dataclasses.field(default=None)
    engine_name: Optional[str] = dataclasses.field(default=None)
    major_engine_version: Optional[str] = dataclasses.field(default=None)
    option_group_description: Optional[str] = dataclasses.field(default=None)
    option_group_name: Optional[str] = dataclasses.field(default=None)
    options: Optional[list[shared_optionslist.OptionsList]] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
