import dataclasses



@dataclasses.dataclass
class SchemeKey2:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    
