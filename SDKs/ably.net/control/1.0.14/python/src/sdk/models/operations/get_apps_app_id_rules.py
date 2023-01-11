import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import http_rule_response as shared_http_rule_response
from ..shared import ifttt_rule_response as shared_ifttt_rule_response
from ..shared import zapier_rule_response as shared_zapier_rule_response
from ..shared import cloudflare_worker_rule_response as shared_cloudflare_worker_rule_response
from ..shared import azure_function_rule_response as shared_azure_function_rule_response
from ..shared import google_cloud_function_rule_response as shared_google_cloud_function_rule_response
from ..shared import aws_lambda_rule_response as shared_aws_lambda_rule_response
from ..shared import aws_kinesis_rule_response as shared_aws_kinesis_rule_response
from ..shared import aws_sqs_rule_response as shared_aws_sqs_rule_response
from ..shared import amqp_rule_response as shared_amqp_rule_response
from ..shared import amqp_external_rule_response as shared_amqp_external_rule_response


@dataclasses.dataclass
class GetAppsAppIDRulesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDRulesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAppsAppIDRulesRequest:
    path_params: GetAppsAppIDRulesPathParams = dataclasses.field()
    security: GetAppsAppIDRulesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule_responses: Optional[list[Any]] = dataclasses.field(default=None)
    
