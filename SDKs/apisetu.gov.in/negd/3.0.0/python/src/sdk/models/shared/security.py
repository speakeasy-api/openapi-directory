import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-APISETU-APIKEY' }})
    

@dataclasses.dataclass
class SchemeClientID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-APISETU-CLIENTID' }})
    
