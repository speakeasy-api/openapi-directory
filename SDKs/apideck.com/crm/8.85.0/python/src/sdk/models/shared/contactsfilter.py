import dataclasses
from typing import Optional


@dataclasses.dataclass
class ContactsFilter:
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email' }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name' }})
    
