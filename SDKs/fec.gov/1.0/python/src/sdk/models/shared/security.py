import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyHeaderAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclasses.dataclass
class SchemeAPIKeyQueryAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclasses.dataclass
class Security:
    api_key_header_auth: SchemeAPIKeyHeaderAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    api_key_query_auth: SchemeAPIKeyQueryAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_key: SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
