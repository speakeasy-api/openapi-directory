import dataclasses



@dataclasses.dataclass
class SchemeOauth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    oauth: SchemeOauth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
