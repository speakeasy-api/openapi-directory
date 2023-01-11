import dataclasses
from typing import Optional
from ..shared import onebatches_get_responses_200_content_application_1json_schema_properties_items_items as shared_onebatches_get_responses_200_content_application_1json_schema_properties_items_items


@dataclasses.dataclass
class GetDetailsSingleBatchPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDetailsSingleBatchRequest:
    path_params: GetDetailsSingleBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDetailsSingleBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onebatches_get_responses_200_content_application_1json_schema_properties_items_items: Optional[shared_onebatches_get_responses_200_content_application_1json_schema_properties_items_items.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems] = dataclasses.field(default=None)
    
