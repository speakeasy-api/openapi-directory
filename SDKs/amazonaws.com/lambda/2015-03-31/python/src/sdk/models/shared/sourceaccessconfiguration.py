import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceaccesstype_enum as shared_sourceaccesstype_enum


@dataclass_json
@dataclasses.dataclass
class SourceAccessConfiguration:
    r"""SourceAccessConfiguration
    To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
    """
    
    type: Optional[shared_sourceaccesstype_enum.SourceAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('URI') }})
    
