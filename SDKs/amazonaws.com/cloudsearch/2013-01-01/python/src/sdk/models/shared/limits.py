import dataclasses



@dataclasses.dataclass
class Limits:
    maximum_partition_count: int = dataclasses.field()
    maximum_replication_count: int = dataclasses.field()
    
