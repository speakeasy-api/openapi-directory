import dataclasses
from typing import Optional
from ..shared import inboxrecipiententity as shared_inboxrecipiententity


@dataclasses.dataclass
class PostInboxRecipientsRequestBody:
    inbox_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    recipient: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'recipient' }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    share_after_create: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'share_after_create' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostInboxRecipientsRequest:
    request: Optional[PostInboxRecipientsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostInboxRecipientsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inbox_recipient_entity: Optional[shared_inboxrecipiententity.InboxRecipientEntity] = dataclasses.field(default=None)
    
