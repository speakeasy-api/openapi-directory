import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describemounttargetsresponse as shared_describemounttargetsresponse


@dataclasses.dataclass
class DescribeMountTargetsQueryParams:
    access_point_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AccessPointId', 'style': 'form', 'explode': True }})
    file_system_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FileSystemId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    mount_target_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MountTargetId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeMountTargetsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMountTargetsRequest:
    headers: DescribeMountTargetsHeaders = dataclasses.field()
    query_params: DescribeMountTargetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeMountTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_point_not_found: Optional[Any] = dataclasses.field(default=None)
    bad_request: Optional[Any] = dataclasses.field(default=None)
    describe_mount_targets_response: Optional[shared_describemounttargetsresponse.DescribeMountTargetsResponse] = dataclasses.field(default=None)
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    mount_target_not_found: Optional[Any] = dataclasses.field(default=None)
    
