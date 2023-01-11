import dataclasses



@dataclasses.dataclass
class FeatureDependency:
    feature_name: str = dataclasses.field()
    version: str = dataclasses.field()
    
