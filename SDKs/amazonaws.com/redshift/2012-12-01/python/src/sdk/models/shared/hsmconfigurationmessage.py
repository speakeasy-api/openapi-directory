import dataclasses
from typing import Optional
from ..shared import hsmconfigurationlist as shared_hsmconfigurationlist


@dataclasses.dataclass
class HsmConfigurationMessage:
    r"""HsmConfigurationMessage
    <p/>
    """
    
    hsm_configurations: Optional[list[shared_hsmconfigurationlist.HsmConfigurationList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
