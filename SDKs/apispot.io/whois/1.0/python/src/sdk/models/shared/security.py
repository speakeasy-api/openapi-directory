import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-API-KEY' }})
    

@dataclasses.dataclass
class Security:
    api_key_auth: SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
