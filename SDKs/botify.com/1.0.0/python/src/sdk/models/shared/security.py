import dataclasses



@dataclasses.dataclass
class SchemeDjangoRestToken:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    django_rest_token: SchemeDjangoRestToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
