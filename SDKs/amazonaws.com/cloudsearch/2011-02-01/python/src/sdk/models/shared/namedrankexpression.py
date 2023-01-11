import dataclasses



@dataclasses.dataclass
class NamedRankExpression:
    r"""NamedRankExpression
    A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
    """
    
    rank_expression: str = dataclasses.field()
    rank_name: str = dataclasses.field()
    
