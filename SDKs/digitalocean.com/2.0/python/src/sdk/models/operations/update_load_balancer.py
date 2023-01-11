import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UpdateLoadBalancerPathParams:
    lb_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lb_id', 'style': 'simple', 'explode': False }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules
    An object specifying a forwarding rule for a load balancer.
    """
    
    entry_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_port') }})
    entry_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_protocol') }})
    target_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_port') }})
    target_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_protocol') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_id') }})
    tls_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_passthrough') }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck
    An object specifying health check settings for the load balancer.
    """
    
    check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval_seconds') }})
    healthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthy_threshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    response_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_timeout_seconds') }})
    unhealthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthy_threshold') }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions
    An object specifying sticky sessions settings for the load balancer.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    cookie_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_ttl_seconds') }})
    type: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByIDInput:
    droplet_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    forwarding_rules: list[UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwarding_rules') }})
    region: shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    algorithm: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    enable_backend_keepalive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_backend_keepalive') }})
    enable_proxy_protocol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_proxy_protocol') }})
    health_check: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_http_to_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http_to_https') }})
    size: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
    An object specifying a forwarding rule for a load balancer.
    """
    
    entry_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_port') }})
    entry_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_protocol') }})
    target_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_port') }})
    target_protocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_protocol') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_id') }})
    tls_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_passthrough') }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
    An object specifying health check settings for the load balancer.
    """
    
    check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval_seconds') }})
    healthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthy_threshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    response_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_timeout_seconds') }})
    unhealthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthy_threshold') }})
    
class UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions:
    r"""UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
    An object specifying sticky sessions settings for the load balancer.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    cookie_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_ttl_seconds') }})
    type: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancerRequestBodyAssignDropletsByTagInput:
    forwarding_rules: list[UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwarding_rules') }})
    region: shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    algorithm: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    enable_backend_keepalive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_backend_keepalive') }})
    enable_proxy_protocol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_proxy_protocol') }})
    health_check: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_http_to_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http_to_https') }})
    size: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    sticky_sessions: Optional[UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateLoadBalancer401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateLoadBalancerRequest:
    path_params: UpdateLoadBalancerPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLoadBalancerResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_load_balancer_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_load_balancer_401_application_json_object: Optional[UpdateLoadBalancer401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
