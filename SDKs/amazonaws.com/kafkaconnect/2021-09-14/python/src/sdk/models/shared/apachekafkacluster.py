import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vpc as shared_vpc


@dataclass_json
@dataclasses.dataclass
class ApacheKafkaCluster:
    r"""ApacheKafkaCluster
    The details of the Apache Kafka cluster to which the connector is connected.
    """
    
    bootstrap_servers: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapServers') }})
    vpc: shared_vpc.Vpc = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
