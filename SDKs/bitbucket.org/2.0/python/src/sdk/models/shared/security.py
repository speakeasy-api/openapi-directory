import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeBasic:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class SchemeOauth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
