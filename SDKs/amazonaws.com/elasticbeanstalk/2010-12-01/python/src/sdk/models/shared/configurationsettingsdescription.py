import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import configurationdeploymentstatus_enum as shared_configurationdeploymentstatus_enum
from ..shared import configurationoptionsetting as shared_configurationoptionsetting


@dataclasses.dataclass
class ConfigurationSettingsDescription:
    r"""ConfigurationSettingsDescription
    Describes the settings for a configuration set.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None)
    date_created: Optional[datetime] = dataclasses.field(default=None)
    date_updated: Optional[datetime] = dataclasses.field(default=None)
    deployment_status: Optional[shared_configurationdeploymentstatus_enum.ConfigurationDeploymentStatusEnum] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    environment_name: Optional[str] = dataclasses.field(default=None)
    option_settings: Optional[list[shared_configurationoptionsetting.ConfigurationOptionSetting]] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    solution_stack_name: Optional[str] = dataclasses.field(default=None)
    template_name: Optional[str] = dataclasses.field(default=None)
    
