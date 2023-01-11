import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpcdescription as shared_vpcdescription


@dataclass_json
@dataclasses.dataclass
class ApacheKafkaClusterDescription:
    r"""ApacheKafkaClusterDescription
    The description of the Apache Kafka cluster to which the connector is connected.
    """
    
    bootstrap_servers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapServers') }})
    vpc: Optional[shared_vpcdescription.VpcDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
