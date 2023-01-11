import dataclasses
from typing import Optional
from enum import Enum
from ..shared import instancemetadataendpointstate_enum as shared_instancemetadataendpointstate_enum
from ..shared import instancemetadatahttptokensstate_enum as shared_instancemetadatahttptokensstate_enum


@dataclasses.dataclass
class InstanceMetadataOptions:
    r"""InstanceMetadataOptions
    The metadata options for the instances. For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds\">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
    """
    
    http_endpoint: Optional[shared_instancemetadataendpointstate_enum.InstanceMetadataEndpointStateEnum] = dataclasses.field(default=None)
    http_put_response_hop_limit: Optional[int] = dataclasses.field(default=None)
    http_tokens: Optional[shared_instancemetadatahttptokensstate_enum.InstanceMetadataHTTPTokensStateEnum] = dataclasses.field(default=None)
    
