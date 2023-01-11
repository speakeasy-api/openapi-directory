import dataclasses
from typing import Optional
from ..shared import onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items as shared_onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items


@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsPrintoutIDPathParams:
    printout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'printout_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsPrintoutIDRequest:
    path_params: GetAlmawsV1TaskListsPrintoutsPrintoutIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items: Optional[shared_onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema_properties_printout_items.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems] = dataclasses.field(default=None)
    
