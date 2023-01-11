import dataclasses



@dataclasses.dataclass
class LatencyDescriptor:
    max_latency: int = dataclasses.field()
    
