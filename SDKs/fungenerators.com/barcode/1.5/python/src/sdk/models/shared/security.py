import dataclasses



@dataclasses.dataclass
class SchemeXFungeneratorsAPISecret:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'X-Fungenerators-Api-Secret' }})
    
