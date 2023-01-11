import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listlaunchprofilemembersresponse as shared_listlaunchprofilemembersresponse


@dataclasses.dataclass
class ListLaunchProfileMembersPathParams:
    launch_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'launchProfileId', 'style': 'simple', 'explode': False }})
    studio_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'studioId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLaunchProfileMembersQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListLaunchProfileMembersHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListLaunchProfileMembersRequest:
    headers: ListLaunchProfileMembersHeaders = dataclasses.field()
    path_params: ListLaunchProfileMembersPathParams = dataclasses.field()
    query_params: ListLaunchProfileMembersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListLaunchProfileMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    list_launch_profile_members_response: Optional[shared_listlaunchprofilemembersresponse.ListLaunchProfileMembersResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
