import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeimagepermissionsrequest as shared_describeimagepermissionsrequest
from ..shared import describeimagepermissionsresult as shared_describeimagepermissionsresult


@dataclasses.dataclass
class DescribeImagePermissionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeImagePermissionsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_DESCRIBE_IMAGE_PERMISSIONS = "PhotonAdminProxyService.DescribeImagePermissions"


@dataclasses.dataclass
class DescribeImagePermissionsHeaders:
    x_amz_target: DescribeImagePermissionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeImagePermissionsRequest:
    headers: DescribeImagePermissionsHeaders = dataclasses.field()
    query_params: DescribeImagePermissionsQueryParams = dataclasses.field()
    request: shared_describeimagepermissionsrequest.DescribeImagePermissionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeImagePermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_image_permissions_result: Optional[shared_describeimagepermissionsresult.DescribeImagePermissionsResult] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
