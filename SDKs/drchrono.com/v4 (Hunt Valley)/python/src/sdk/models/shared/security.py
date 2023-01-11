import dataclasses



@dataclasses.dataclass
class SchemeDrchronoOauth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
