import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getflowtemplaterevisionsrequest as shared_getflowtemplaterevisionsrequest
from ..shared import getflowtemplaterevisionsresponse as shared_getflowtemplaterevisionsresponse


@dataclasses.dataclass
class GetFlowTemplateRevisionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetFlowTemplateRevisionsXAmzTargetEnum(str, Enum):
    IOT_THINGS_GRAPH_FRONT_END_SERVICE_GET_FLOW_TEMPLATE_REVISIONS = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"


@dataclasses.dataclass
class GetFlowTemplateRevisionsHeaders:
    x_amz_target: GetFlowTemplateRevisionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFlowTemplateRevisionsRequest:
    headers: GetFlowTemplateRevisionsHeaders = dataclasses.field()
    query_params: GetFlowTemplateRevisionsQueryParams = dataclasses.field()
    request: shared_getflowtemplaterevisionsrequest.GetFlowTemplateRevisionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetFlowTemplateRevisionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_flow_template_revisions_response: Optional[shared_getflowtemplaterevisionsresponse.GetFlowTemplateRevisionsResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
