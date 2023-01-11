import dataclasses



@dataclasses.dataclass
class SchemeConnectToken:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
