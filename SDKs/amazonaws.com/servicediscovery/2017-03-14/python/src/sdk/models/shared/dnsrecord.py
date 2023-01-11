import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordtype_enum as shared_recordtype_enum


@dataclass_json
@dataclasses.dataclass
class DNSRecord:
    r"""DNSRecord
    A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
    """
    
    ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TTL') }})
    type: shared_recordtype_enum.RecordTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
