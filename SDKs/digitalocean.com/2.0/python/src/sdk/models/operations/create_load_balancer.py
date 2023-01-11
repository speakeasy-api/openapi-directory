import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules
    An object specifying a forwarding rule for a load balancer.
    """
    
    entry_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_port') }})
    entry_protocol: CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_protocol') }})
    target_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_port') }})
    target_protocol: CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_protocol') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_id') }})
    tls_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_passthrough') }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck
    An object specifying health check settings for the load balancer.
    """
    
    check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval_seconds') }})
    healthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthy_threshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    response_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_timeout_seconds') }})
    unhealthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthy_threshold') }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions
    An object specifying sticky sessions settings for the load balancer.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    cookie_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_ttl_seconds') }})
    type: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByIDInput:
    droplet_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    forwarding_rules: list[CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwarding_rules') }})
    region: shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    algorithm: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    enable_backend_keepalive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_backend_keepalive') }})
    enable_proxy_protocol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_proxy_protocol') }})
    health_check: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_http_to_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http_to_https') }})
    size: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sticky_sessions: Optional[CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
    An object specifying a forwarding rule for a load balancer.
    """
    
    entry_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_port') }})
    entry_protocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_protocol') }})
    target_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_port') }})
    target_protocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_protocol') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_id') }})
    tls_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_passthrough') }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
    An object specifying health check settings for the load balancer.
    """
    
    check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval_seconds') }})
    healthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthy_threshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    response_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_timeout_seconds') }})
    unhealthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthy_threshold') }})
    
class CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions:
    r"""CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
    An object specifying sticky sessions settings for the load balancer.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    cookie_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_ttl_seconds') }})
    type: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancerRequestBodyAssignDropletsByTagInput:
    forwarding_rules: list[CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwarding_rules') }})
    region: shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    algorithm: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    enable_backend_keepalive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_backend_keepalive') }})
    enable_proxy_protocol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_proxy_protocol') }})
    health_check: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_http_to_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http_to_https') }})
    size: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sticky_sessions: Optional[CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLoadBalancer401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateLoadBalancerRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLoadBalancerResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_load_balancer_202_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_load_balancer_401_application_json_object: Optional[CreateLoadBalancer401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
