import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firelensconfigurationtype_enum as shared_firelensconfigurationtype_enum


@dataclass_json
@dataclasses.dataclass
class FirelensConfiguration:
    r"""FirelensConfiguration
    The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html\">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
    """
    
    type: shared_firelensconfigurationtype_enum.FirelensConfigurationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    options: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
