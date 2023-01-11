import dataclasses



@dataclasses.dataclass
class SchemeJwtsa:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
