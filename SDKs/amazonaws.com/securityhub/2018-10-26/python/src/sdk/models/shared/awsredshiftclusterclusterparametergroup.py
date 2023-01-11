import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsredshiftclusterclusterparameterstatus as shared_awsredshiftclusterclusterparameterstatus


@dataclass_json
@dataclasses.dataclass
class AwsRedshiftClusterClusterParameterGroup:
    r"""AwsRedshiftClusterClusterParameterGroup
    A cluster parameter group that is associated with an Amazon Redshift cluster.
    """
    
    cluster_parameter_status_list: Optional[list[shared_awsredshiftclusterclusterparameterstatus.AwsRedshiftClusterClusterParameterStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterParameterStatusList') }})
    parameter_apply_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterApplyStatus') }})
    parameter_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    
