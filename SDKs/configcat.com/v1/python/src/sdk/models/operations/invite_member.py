import dataclasses
from typing import Optional
from ..shared import invitemembersrequest as shared_invitemembersrequest


@dataclasses.dataclass
class InviteMemberPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InviteMemberRequests:
    invite_members_request: Optional[shared_invitemembersrequest.InviteMembersRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    invite_members_request1: Optional[shared_invitemembersrequest.InviteMembersRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invite_members_request2: Optional[shared_invitemembersrequest.InviteMembersRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class InviteMemberRequest:
    path_params: InviteMemberPathParams = dataclasses.field()
    request: InviteMemberRequests = dataclasses.field()
    

@dataclasses.dataclass
class InviteMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
