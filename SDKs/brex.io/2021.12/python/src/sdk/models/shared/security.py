import dataclasses



@dataclasses.dataclass
class SchemeUserKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'user_key' }})
    
