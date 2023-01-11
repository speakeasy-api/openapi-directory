import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterParameterGroupList:
    r"""DbClusterParameterGroupList
    <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
    """
    
    db_cluster_parameter_group_arn: Optional[str] = dataclasses.field(default=None)
    db_cluster_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
