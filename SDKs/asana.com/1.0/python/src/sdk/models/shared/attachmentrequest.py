import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class AttachmentRequestFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    
class AttachmentRequestResourceSubtypeEnum(str, Enum):
    ASANA_FILE_ATTACHMENTS = "asana_file_attachments"
    EXTERNAL = "external"


@dataclasses.dataclass
class AttachmentRequest:
    file: Optional[AttachmentRequestFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    resource_subtype: Optional[AttachmentRequestResourceSubtypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'resource_subtype' }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'url' }})
    
