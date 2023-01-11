import dataclasses
from typing import Any,Optional
from ..shared import inboxuploadentity as shared_inboxuploadentity


@dataclasses.dataclass
class GetInboxUploadsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    inbox_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inbox_id', 'style': 'form', 'explode': True }})
    inbox_registration_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inbox_registration_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInboxUploadsRequest:
    query_params: GetInboxUploadsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInboxUploadsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inbox_upload_entities: Optional[list[shared_inboxuploadentity.InboxUploadEntity]] = dataclasses.field(default=None)
    
