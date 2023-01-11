import dataclasses



@dataclasses.dataclass
class SchemeTokenHeader:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'token' }})
    

@dataclasses.dataclass
class Security:
    token_header: SchemeTokenHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
