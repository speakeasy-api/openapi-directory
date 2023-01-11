import dataclasses
from typing import Optional
from ..shared import nodeconfigurationoptionlist as shared_nodeconfigurationoptionlist


@dataclasses.dataclass
class NodeConfigurationOptionsMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    node_configuration_option_list: Optional[list[shared_nodeconfigurationoptionlist.NodeConfigurationOptionList]] = dataclasses.field(default=None)
    
