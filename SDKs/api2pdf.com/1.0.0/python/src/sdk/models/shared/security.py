import dataclasses



@dataclasses.dataclass
class SchemeHeaderAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    header_api_key: SchemeHeaderAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class SchemeQueryAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'apikey' }})
    
