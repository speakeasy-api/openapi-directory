import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbParameterGroupList:
    r"""DbParameterGroupList
    <p>Contains the details of an Amazon RDS DB parameter group. </p> <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action. </p>
    """
    
    db_parameter_group_arn: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_family: Optional[str] = dataclasses.field(default=None)
    db_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    
