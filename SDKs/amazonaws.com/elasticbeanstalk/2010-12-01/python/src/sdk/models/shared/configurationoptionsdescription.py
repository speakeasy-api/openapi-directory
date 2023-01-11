import dataclasses
from typing import Optional
from ..shared import configurationoptiondescription as shared_configurationoptiondescription


@dataclasses.dataclass
class ConfigurationOptionsDescription:
    r"""ConfigurationOptionsDescription
    Describes the settings for a specified configuration set.
    """
    
    options: Optional[list[shared_configurationoptiondescription.ConfigurationOptionDescription]] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    solution_stack_name: Optional[str] = dataclasses.field(default=None)
    
