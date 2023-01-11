import dataclasses
from typing import Optional
from ..shared import onebatches_get_responses_200_content_application_1json_schema as shared_onebatches_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetItemsBatchInternalTrasnferPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemsBatchInternalTrasnferQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetItemsBatchInternalTrasnferRequest:
    path_params: GetItemsBatchInternalTrasnferPathParams = dataclasses.field()
    query_params: GetItemsBatchInternalTrasnferQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemsBatchInternalTrasnferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onebatches_get_responses_200_content_application_1json_schema: Optional[shared_onebatches_get_responses_200_content_application_1json_schema.OnebatchesGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
