import dataclasses
from typing import Optional
from ..shared import inboxregistrationentity as shared_inboxregistrationentity


@dataclasses.dataclass
class GetInboxRegistrationsQueryParams:
    folder_behavior_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'folder_behavior_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInboxRegistrationsRequest:
    query_params: GetInboxRegistrationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInboxRegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inbox_registration_entities: Optional[list[shared_inboxregistrationentity.InboxRegistrationEntity]] = dataclasses.field(default=None)
    
