import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apachekafkaclusterdescription as shared_apachekafkaclusterdescription


@dataclass_json
@dataclasses.dataclass
class KafkaClusterDescription:
    r"""KafkaClusterDescription
    Details of how to connect to the Apache Kafka cluster.
    """
    
    apache_kafka_cluster: Optional[shared_apachekafkaclusterdescription.ApacheKafkaClusterDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apacheKafkaCluster') }})
    
