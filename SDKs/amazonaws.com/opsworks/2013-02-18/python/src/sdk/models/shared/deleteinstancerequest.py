import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteInstanceRequest:
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    delete_elastic_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteElasticIp') }})
    delete_volumes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteVolumes') }})
    
