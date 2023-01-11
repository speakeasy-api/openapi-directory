import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyInstanceMetadataOptionsResultInstanceMetadataOptions:
    r"""ModifyInstanceMetadataOptionsResultInstanceMetadataOptions
    The metadata options for the instance.
    """
    
    http_endpoint: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_protocol_ipv6: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_put_response_hop_limit: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_tokens: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyInstanceMetadataOptionsResult:
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_metadata_options: Optional[ModifyInstanceMetadataOptionsResultInstanceMetadataOptions] = dataclasses.field(default=None)
    
