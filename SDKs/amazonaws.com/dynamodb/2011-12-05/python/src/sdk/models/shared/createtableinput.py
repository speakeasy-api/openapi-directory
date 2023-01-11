import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keyschema as shared_keyschema
from ..shared import provisionedthroughput as shared_provisionedthroughput


@dataclass_json
@dataclasses.dataclass
class CreateTableInput:
    key_schema: shared_keyschema.KeySchema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    provisioned_throughput: shared_provisionedthroughput.ProvisionedThroughput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
