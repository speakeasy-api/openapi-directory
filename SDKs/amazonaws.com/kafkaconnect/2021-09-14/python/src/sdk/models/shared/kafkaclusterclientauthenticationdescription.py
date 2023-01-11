import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kafkaclusterclientauthenticationtype_enum as shared_kafkaclusterclientauthenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class KafkaClusterClientAuthenticationDescription:
    r"""KafkaClusterClientAuthenticationDescription
    The client authentication information used in order to authenticate with the Apache Kafka cluster.
    """
    
    authentication_type: Optional[shared_kafkaclusterclientauthenticationtype_enum.KafkaClusterClientAuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    
