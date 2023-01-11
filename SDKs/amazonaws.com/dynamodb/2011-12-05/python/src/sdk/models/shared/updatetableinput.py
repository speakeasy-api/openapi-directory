import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisionedthroughput as shared_provisionedthroughput


@dataclass_json
@dataclasses.dataclass
class UpdateTableInput:
    provisioned_throughput: shared_provisionedthroughput.ProvisionedThroughput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
