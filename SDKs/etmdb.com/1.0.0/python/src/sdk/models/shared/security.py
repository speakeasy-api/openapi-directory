import dataclasses



@dataclasses.dataclass
class SchemeOauth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
