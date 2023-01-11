import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostAlmawsV1TaskListsTestResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    post_almaws_v1_task_lists_test_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
