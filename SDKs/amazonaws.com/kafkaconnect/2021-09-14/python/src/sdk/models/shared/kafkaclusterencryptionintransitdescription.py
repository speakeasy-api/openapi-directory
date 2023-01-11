import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kafkaclusterencryptionintransittype_enum as shared_kafkaclusterencryptionintransittype_enum


@dataclass_json
@dataclasses.dataclass
class KafkaClusterEncryptionInTransitDescription:
    r"""KafkaClusterEncryptionInTransitDescription
    The description of the encryption in transit to the Apache Kafka cluster.
    """
    
    encryption_type: Optional[shared_kafkaclusterencryptionintransittype_enum.KafkaClusterEncryptionInTransitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    
