import dataclasses
from typing import Any,Optional
from ..shared import bundledownloadentity as shared_bundledownloadentity


@dataclasses.dataclass
class GetBundleDownloadsQueryParams:
    bundle_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundle_id', 'style': 'form', 'explode': True }})
    bundle_registration_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundle_registration_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBundleDownloadsRequest:
    query_params: GetBundleDownloadsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBundleDownloadsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bundle_download_entities: Optional[list[shared_bundledownloadentity.BundleDownloadEntity]] = dataclasses.field(default=None)
    
