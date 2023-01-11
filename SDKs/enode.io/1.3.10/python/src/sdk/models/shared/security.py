import dataclasses



@dataclasses.dataclass
class SchemeClientAccessToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeUserAccessToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
