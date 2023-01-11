import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyHeader:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-api-key' }})
    
