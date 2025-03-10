"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class GetIntegrationResultConnectionTypeEnum(str, Enum):
    r"""The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET."""
    INTERNET = 'INTERNET'
    VPC_LINK = 'VPC_LINK'

class GetIntegrationResultContentHandlingStrategyEnum(str, Enum):
    r"""<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>"""
    CONVERT_TO_BINARY = 'CONVERT_TO_BINARY'
    CONVERT_TO_TEXT = 'CONVERT_TO_TEXT'

class GetIntegrationResultIntegrationTypeEnum(str, Enum):
    r"""<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a \\"loopback\\" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>"""
    AWS = 'AWS'
    HTTP = 'HTTP'
    MOCK = 'MOCK'
    HTTP_PROXY = 'HTTP_PROXY'
    AWS_PROXY = 'AWS_PROXY'

class GetIntegrationResultPassthroughBehaviorEnum(str, Enum):
    r"""<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>"""
    WHEN_NO_MATCH = 'WHEN_NO_MATCH'
    NEVER = 'NEVER'
    WHEN_NO_TEMPLATES = 'WHEN_NO_TEMPLATES'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetIntegrationResultTLSConfig:
    r"""The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs."""
    
    server_name_to_verify: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ServerNameToVerify'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetIntegrationResult:
    r"""Success"""
    
    api_gateway_managed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ApiGatewayManaged'), 'exclude': lambda f: f is None }})  
    connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConnectionId'), 'exclude': lambda f: f is None }})  
    connection_type: Optional[GetIntegrationResultConnectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConnectionType'), 'exclude': lambda f: f is None }})  
    content_handling_strategy: Optional[GetIntegrationResultContentHandlingStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ContentHandlingStrategy'), 'exclude': lambda f: f is None }})  
    credentials_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CredentialsArn'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    integration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationId'), 'exclude': lambda f: f is None }})  
    integration_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationMethod'), 'exclude': lambda f: f is None }})  
    integration_response_selection_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationResponseSelectionExpression'), 'exclude': lambda f: f is None }})  
    integration_subtype: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationSubtype'), 'exclude': lambda f: f is None }})  
    integration_type: Optional[GetIntegrationResultIntegrationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationType'), 'exclude': lambda f: f is None }})  
    integration_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IntegrationUri'), 'exclude': lambda f: f is None }})  
    passthrough_behavior: Optional[GetIntegrationResultPassthroughBehaviorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PassthroughBehavior'), 'exclude': lambda f: f is None }})  
    payload_format_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PayloadFormatVersion'), 'exclude': lambda f: f is None }})  
    request_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RequestParameters'), 'exclude': lambda f: f is None }})  
    request_templates: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RequestTemplates'), 'exclude': lambda f: f is None }})  
    response_parameters: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResponseParameters'), 'exclude': lambda f: f is None }})  
    template_selection_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TemplateSelectionExpression'), 'exclude': lambda f: f is None }})  
    timeout_in_millis: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TimeoutInMillis'), 'exclude': lambda f: f is None }})  
    tls_config: Optional[GetIntegrationResultTLSConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TlsConfig'), 'exclude': lambda f: f is None }})  
    