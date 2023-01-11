import dataclasses



@dataclasses.dataclass
class Expression:
    r"""Expression
    A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
    """
    
    expression_name: str = dataclasses.field()
    expression_value: str = dataclasses.field()
    
