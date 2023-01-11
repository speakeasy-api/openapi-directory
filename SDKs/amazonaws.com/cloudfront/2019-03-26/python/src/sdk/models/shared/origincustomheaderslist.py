import dataclasses



@dataclasses.dataclass
class OriginCustomHeadersList:
    r"""OriginCustomHeadersList
    A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
    """
    
    header_name: str = dataclasses.field()
    header_value: str = dataclasses.field()
    
