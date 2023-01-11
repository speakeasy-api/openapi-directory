import dataclasses



@dataclasses.dataclass
class SchemeJwt:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Appwrite-JWT' }})
    

@dataclasses.dataclass
class SchemeKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Appwrite-Key' }})
    

@dataclasses.dataclass
class SchemeLocale:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Appwrite-Locale' }})
    

@dataclasses.dataclass
class SchemeProject:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Appwrite-Project' }})
    
