import dataclasses



@dataclasses.dataclass
class SchemeCustomkey2:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-2' }})
    

@dataclasses.dataclass
class SchemeCustomkeys1:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X1123' }})
    

@dataclasses.dataclass
class SchemeBearerAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeOauthAuthorizeCode:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeOauthsecurity:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
