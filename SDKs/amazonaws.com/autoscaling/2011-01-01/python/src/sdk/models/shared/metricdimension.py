import dataclasses



@dataclasses.dataclass
class MetricDimension:
    r"""MetricDimension
    Describes the dimension of a metric.
    """
    
    name: str = dataclasses.field()
    value: str = dataclasses.field()
    
