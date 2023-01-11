import dataclasses



@dataclasses.dataclass
class SchemeAuth:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class Security:
    auth: SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
