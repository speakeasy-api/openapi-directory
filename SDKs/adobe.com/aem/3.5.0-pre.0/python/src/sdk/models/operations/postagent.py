import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PostAgentPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAgentQueryParams:
    operation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    jcr_content_cq_distribute: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/cq:distribute', 'style': 'form', 'explode': True }})
    jcr_content_cq_distribute_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/cq:distribute@TypeHint', 'style': 'form', 'explode': True }})
    jcr_content_cq_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/cq:name', 'style': 'form', 'explode': True }})
    jcr_content_cq_template: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/cq:template', 'style': 'form', 'explode': True }})
    jcr_content_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/enabled', 'style': 'form', 'explode': True }})
    jcr_content_jcr_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/jcr:description', 'style': 'form', 'explode': True }})
    jcr_content_jcr_last_modified: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/jcr:lastModified', 'style': 'form', 'explode': True }})
    jcr_content_jcr_last_modified_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/jcr:lastModifiedBy', 'style': 'form', 'explode': True }})
    jcr_content_jcr_mixin_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/jcr:mixinTypes', 'style': 'form', 'explode': True }})
    jcr_content_jcr_title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/jcr:title', 'style': 'form', 'explode': True }})
    jcr_content_log_level: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/logLevel', 'style': 'form', 'explode': True }})
    jcr_content_no_status_update: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/noStatusUpdate', 'style': 'form', 'explode': True }})
    jcr_content_no_versioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/noVersioning', 'style': 'form', 'explode': True }})
    jcr_content_protocol_connect_timeout: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolConnectTimeout', 'style': 'form', 'explode': True }})
    jcr_content_protocol_http_connection_closed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPConnectionClosed', 'style': 'form', 'explode': True }})
    jcr_content_protocol_http_expired: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPExpired', 'style': 'form', 'explode': True }})
    jcr_content_protocol_http_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPHeaders', 'style': 'form', 'explode': True }})
    jcr_content_protocol_http_headers_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPHeaders@TypeHint', 'style': 'form', 'explode': True }})
    jcr_content_protocol_http_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPMethod', 'style': 'form', 'explode': True }})
    jcr_content_protocol_https_relaxed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolHTTPSRelaxed', 'style': 'form', 'explode': True }})
    jcr_content_protocol_interface: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolInterface', 'style': 'form', 'explode': True }})
    jcr_content_protocol_socket_timeout: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolSocketTimeout', 'style': 'form', 'explode': True }})
    jcr_content_protocol_version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/protocolVersion', 'style': 'form', 'explode': True }})
    jcr_content_proxy_host: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyHost', 'style': 'form', 'explode': True }})
    jcr_content_proxy_ntlm_domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyNTLMDomain', 'style': 'form', 'explode': True }})
    jcr_content_proxy_ntlm_host: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyNTLMHost', 'style': 'form', 'explode': True }})
    jcr_content_proxy_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyPassword', 'style': 'form', 'explode': True }})
    jcr_content_proxy_port: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyPort', 'style': 'form', 'explode': True }})
    jcr_content_proxy_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/proxyUser', 'style': 'form', 'explode': True }})
    jcr_content_queue_batch_max_size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/queueBatchMaxSize', 'style': 'form', 'explode': True }})
    jcr_content_queue_batch_mode: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/queueBatchMode', 'style': 'form', 'explode': True }})
    jcr_content_queue_batch_wait_time: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/queueBatchWaitTime', 'style': 'form', 'explode': True }})
    jcr_content_retry_delay: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/retryDelay', 'style': 'form', 'explode': True }})
    jcr_content_reverse_replication: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/reverseReplication', 'style': 'form', 'explode': True }})
    jcr_content_serialization_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/serializationType', 'style': 'form', 'explode': True }})
    jcr_content_sling_resource_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/sling:resourceType', 'style': 'form', 'explode': True }})
    jcr_content_ssl: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/ssl', 'style': 'form', 'explode': True }})
    jcr_content_transport_ntlm_domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/transportNTLMDomain', 'style': 'form', 'explode': True }})
    jcr_content_transport_ntlm_host: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/transportNTLMHost', 'style': 'form', 'explode': True }})
    jcr_content_transport_password: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/transportPassword', 'style': 'form', 'explode': True }})
    jcr_content_transport_uri: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/transportUri', 'style': 'form', 'explode': True }})
    jcr_content_transport_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/transportUser', 'style': 'form', 'explode': True }})
    jcr_content_trigger_distribute: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/triggerDistribute', 'style': 'form', 'explode': True }})
    jcr_content_trigger_modified: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/triggerModified', 'style': 'form', 'explode': True }})
    jcr_content_trigger_on_off_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/triggerOnOffTime', 'style': 'form', 'explode': True }})
    jcr_content_trigger_receive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/triggerReceive', 'style': 'form', 'explode': True }})
    jcr_content_trigger_specific: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/triggerSpecific', 'style': 'form', 'explode': True }})
    jcr_content_user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:content/userId', 'style': 'form', 'explode': True }})
    jcr_primary_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'jcr:primaryType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAgentRequest:
    path_params: PostAgentPathParams = dataclasses.field()
    query_params: PostAgentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAgentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
