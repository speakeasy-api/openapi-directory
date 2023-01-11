import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describemounttargetsecuritygroupsresponse as shared_describemounttargetsecuritygroupsresponse


@dataclasses.dataclass
class DescribeMountTargetSecurityGroupsPathParams:
    mount_target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MountTargetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMountTargetSecurityGroupsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeMountTargetSecurityGroupsRequest:
    headers: DescribeMountTargetSecurityGroupsHeaders = dataclasses.field()
    path_params: DescribeMountTargetSecurityGroupsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeMountTargetSecurityGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[Any] = dataclasses.field(default=None)
    describe_mount_target_security_groups_response: Optional[shared_describemounttargetsecuritygroupsresponse.DescribeMountTargetSecurityGroupsResponse] = dataclasses.field(default=None)
    incorrect_mount_target_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    mount_target_not_found: Optional[Any] = dataclasses.field(default=None)
    
