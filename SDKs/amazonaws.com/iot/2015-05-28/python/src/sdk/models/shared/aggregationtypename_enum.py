import dataclasses
from enum import Enum

class AggregationTypeNameEnum(str, Enum):
    STATISTICS = "Statistics"
    PERCENTILES = "Percentiles"
    CARDINALITY = "Cardinality"

