import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeCertAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
