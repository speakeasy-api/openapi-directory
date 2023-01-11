import dataclasses



@dataclasses.dataclass
class ResumeClusterMessage:
    r"""ResumeClusterMessage
    Describes a resume cluster operation. For example, a scheduled action to run the <code>ResumeCluster</code> API operation. 
    """
    
    cluster_identifier: str = dataclasses.field()
    
