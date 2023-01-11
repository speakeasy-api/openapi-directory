import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum(str, Enum):
    ROUND_ROBIN = "round_robin"
    LEAST_CONNECTIONS = "least_connections"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    HTTP2 = "http2"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules:
    r"""Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules
    An object specifying a forwarding rule for a load balancer.
    """
    
    entry_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_port') }})
    entry_protocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_protocol') }})
    target_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_port') }})
    target_protocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_protocol') }})
    certificate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_id') }})
    tls_passthrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_passthrough') }})
    
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum(str, Enum):
    HTTP = "http"
    HTTPS = "https"
    TCP = "tcp"


@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck:
    r"""Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck
    An object specifying health check settings for the load balancer.
    """
    
    check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_interval_seconds') }})
    healthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthy_threshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    response_timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_timeout_seconds') }})
    unhealthy_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthy_threshold') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion:
    r"""Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion
    The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.
    """
    
    available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    features: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sizes: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum(str, Enum):
    LB_SMALL = "lb-small"
    LB_MEDIUM = "lb-medium"
    LB_LARGE = "lb-large"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum(str, Enum):
    NEW = "new"
    ACTIVE = "active"
    ERRORED = "errored"

class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum(str, Enum):
    COOKIES = "cookies"
    NONE = "none"


@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions:
    r"""Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions
    An object specifying sticky sessions settings for the load balancer.
    """
    
    cookie_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_name') }})
    cookie_ttl_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookie_ttl_seconds') }})
    type: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer:
    forwarding_rules: list[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwarding_rules') }})
    algorithm: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    droplet_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_ids') }})
    enable_backend_keepalive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_backend_keepalive') }})
    enable_proxy_protocol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_proxy_protocol') }})
    health_check: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    redirect_http_to_https: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_http_to_https') }})
    region: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sticky_sessions: Optional[Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky_sessions') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    
