import dataclasses
from typing import Optional
from ..shared import onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema as shared_onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class PostAlmawsV1TaskListsPrintoutsQueryParams:
    op: str = dataclasses.field(metadata={'query_param': { 'field_name': 'op', 'style': 'form', 'explode': True }})
    letter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'letter', 'style': 'form', 'explode': True }})
    printer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printer_id', 'style': 'form', 'explode': True }})
    printout_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printout_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsPrintoutsRequest:
    query_params: PostAlmawsV1TaskListsPrintoutsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAlmawsV1TaskListsPrintoutsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema: Optional[shared_onealmaws_1v1_1task_lists_1printouts_get_responses_200_content_application_1json_schema.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
