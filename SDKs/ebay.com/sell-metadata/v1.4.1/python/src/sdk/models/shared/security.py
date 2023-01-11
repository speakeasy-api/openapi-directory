import dataclasses



@dataclasses.dataclass
class SchemeAPIAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
