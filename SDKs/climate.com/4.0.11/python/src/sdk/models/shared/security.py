import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclasses.dataclass
class SchemeOauth2AuthorizationCode:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
