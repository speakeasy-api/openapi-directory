import dataclasses



@dataclasses.dataclass
class SchemeAPIKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeApplicationID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-apideck-app-id' }})
    

@dataclasses.dataclass
class SchemeConsumerID:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclasses.dataclass
class Security:
    api_key: SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    application_id: SchemeApplicationID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    consumer_id: SchemeConsumerID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
