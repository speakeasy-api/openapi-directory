import dataclasses
from typing import Optional
from ..shared import csvexportstatus as shared_csvexportstatus
from ..shared import defaultpayload as shared_defaultpayload


@dataclasses.dataclass
class GetUrlsExportStatusPathParams:
    analysis_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_slug', 'style': 'simple', 'explode': False }})
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    url_export_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'url_export_id', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUrlsExportStatusRequest:
    path_params: GetUrlsExportStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUrlsExportStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    csv_export_status: Optional[shared_csvexportstatus.CsvExportStatus] = dataclasses.field(default=None)
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    
