import dataclasses
from typing import Optional
from ..shared import configurationsettingsdescription as shared_configurationsettingsdescription


@dataclasses.dataclass
class ConfigurationSettingsDescriptions:
    r"""ConfigurationSettingsDescriptions
    The results from a request to change the configuration settings of an environment.
    """
    
    configuration_settings: Optional[list[shared_configurationsettingsdescription.ConfigurationSettingsDescription]] = dataclasses.field(default=None)
    
