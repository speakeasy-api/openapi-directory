import dataclasses



@dataclasses.dataclass
class Tag:
    r"""Tag
    A key-value pair associated with a CloudWatch resource.
    """
    
    key: str = dataclasses.field()
    value: str = dataclasses.field()
    
