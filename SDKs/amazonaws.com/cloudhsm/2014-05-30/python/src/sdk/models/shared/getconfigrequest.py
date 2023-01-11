import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientversion_enum as shared_clientversion_enum


@dataclass_json
@dataclasses.dataclass
class GetConfigRequest:
    client_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientArn') }})
    client_version: shared_clientversion_enum.ClientVersionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientVersion') }})
    hapg_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgList') }})
    
