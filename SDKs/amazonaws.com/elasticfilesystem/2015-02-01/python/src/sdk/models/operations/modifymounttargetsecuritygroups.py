import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ModifyMountTargetSecurityGroupsPathParams:
    mount_target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MountTargetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifyMountTargetSecurityGroupsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ModifyMountTargetSecurityGroupsRequestBody:
    security_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    

@dataclasses.dataclass
class ModifyMountTargetSecurityGroupsRequest:
    headers: ModifyMountTargetSecurityGroupsHeaders = dataclasses.field()
    path_params: ModifyMountTargetSecurityGroupsPathParams = dataclasses.field()
    request: ModifyMountTargetSecurityGroupsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyMountTargetSecurityGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[Any] = dataclasses.field(default=None)
    incorrect_mount_target_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    mount_target_not_found: Optional[Any] = dataclasses.field(default=None)
    security_group_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    security_group_not_found: Optional[Any] = dataclasses.field(default=None)
    
