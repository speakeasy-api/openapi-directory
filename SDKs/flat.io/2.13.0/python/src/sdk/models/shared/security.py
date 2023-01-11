import dataclasses



@dataclasses.dataclass
class SchemeOAuth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
