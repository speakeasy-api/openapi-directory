"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import launchtemplatehttptokensstate_enum as shared_launchtemplatehttptokensstate_enum
from ..shared import launchtemplateinstancemetadataendpointstate_enum as shared_launchtemplateinstancemetadataendpointstate_enum
from ..shared import launchtemplateinstancemetadataprotocolipv6_enum as shared_launchtemplateinstancemetadataprotocolipv6_enum
from ..shared import launchtemplateinstancemetadatatagsstate_enum as shared_launchtemplateinstancemetadatatagsstate_enum
from typing import Optional


@dataclasses.dataclass
class LaunchTemplateInstanceMetadataOptionsRequest:
    r"""The metadata options for the instance. For more information, see <a href=\\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html\\">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>."""
    
    http_endpoint: Optional[shared_launchtemplateinstancemetadataendpointstate_enum.LaunchTemplateInstanceMetadataEndpointStateEnum] = dataclasses.field(default=None)  
    http_protocol_ipv6: Optional[shared_launchtemplateinstancemetadataprotocolipv6_enum.LaunchTemplateInstanceMetadataProtocolIpv6Enum] = dataclasses.field(default=None)  
    http_put_response_hop_limit: Optional[int] = dataclasses.field(default=None)  
    http_tokens: Optional[shared_launchtemplatehttptokensstate_enum.LaunchTemplateHTTPTokensStateEnum] = dataclasses.field(default=None)  
    instance_metadata_tags: Optional[shared_launchtemplateinstancemetadatatagsstate_enum.LaunchTemplateInstanceMetadataTagsStateEnum] = dataclasses.field(default=None)  
    