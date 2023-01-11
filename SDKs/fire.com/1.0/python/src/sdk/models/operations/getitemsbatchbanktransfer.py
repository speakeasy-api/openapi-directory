import dataclasses
from typing import Optional
from ..shared import onebatches_get_responses_200_content_application_1json_schema as shared_onebatches_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetItemsBatchBankTransferPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemsBatchBankTransferQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetItemsBatchBankTransferRequest:
    path_params: GetItemsBatchBankTransferPathParams = dataclasses.field()
    query_params: GetItemsBatchBankTransferQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemsBatchBankTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onebatches_get_responses_200_content_application_1json_schema: Optional[shared_onebatches_get_responses_200_content_application_1json_schema.OnebatchesGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
