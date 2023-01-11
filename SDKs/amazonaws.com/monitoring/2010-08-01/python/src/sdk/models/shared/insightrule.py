import dataclasses



@dataclasses.dataclass
class InsightRule:
    r"""InsightRule
    This structure contains the definition for a Contributor Insights rule.
    """
    
    definition: str = dataclasses.field()
    name: str = dataclasses.field()
    schema: str = dataclasses.field()
    state: str = dataclasses.field()
    
