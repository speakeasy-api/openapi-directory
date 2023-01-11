import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpurldestinationconfiguration as shared_httpurldestinationconfiguration
from ..shared import vpcdestinationconfiguration as shared_vpcdestinationconfiguration
from ..shared import createtopicruledestinationresponse as shared_createtopicruledestinationresponse


@dataclasses.dataclass
class CreateTopicRuleDestinationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTopicRuleDestinationRequestBodyDestinationConfiguration:
    r"""CreateTopicRuleDestinationRequestBodyDestinationConfiguration
    Configuration of the topic rule destination.
    """
    
    http_url_configuration: Optional[shared_httpurldestinationconfiguration.HTTPURLDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpUrlConfiguration') }})
    vpc_configuration: Optional[shared_vpcdestinationconfiguration.VpcDestinationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfiguration') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTopicRuleDestinationRequestBody:
    destination_configuration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfiguration') }})
    

@dataclasses.dataclass
class CreateTopicRuleDestinationRequest:
    headers: CreateTopicRuleDestinationHeaders = dataclasses.field()
    request: CreateTopicRuleDestinationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTopicRuleDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_resource_update_exception: Optional[Any] = dataclasses.field(default=None)
    create_topic_rule_destination_response: Optional[shared_createtopicruledestinationresponse.CreateTopicRuleDestinationResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
