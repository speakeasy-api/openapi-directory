import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-API-Key' }})
    

@dataclasses.dataclass
class SchemeBasicAuth:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    
