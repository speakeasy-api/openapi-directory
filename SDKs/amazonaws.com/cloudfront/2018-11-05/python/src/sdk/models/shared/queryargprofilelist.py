import dataclasses



@dataclasses.dataclass
class QueryArgProfileList:
    r"""QueryArgProfileList
    Query argument-profile mapping for field-level encryption.
    """
    
    profile_id: str = dataclasses.field()
    query_arg: str = dataclasses.field()
    
