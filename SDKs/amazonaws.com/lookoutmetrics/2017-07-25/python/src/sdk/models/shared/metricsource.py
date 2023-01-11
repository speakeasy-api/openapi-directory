import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appflowconfig as shared_appflowconfig
from ..shared import cloudwatchconfig as shared_cloudwatchconfig
from ..shared import rdssourceconfig as shared_rdssourceconfig
from ..shared import redshiftsourceconfig as shared_redshiftsourceconfig
from ..shared import s3sourceconfig as shared_s3sourceconfig


@dataclass_json
@dataclasses.dataclass
class MetricSource:
    r"""MetricSource
    Contains information about source data used to generate a metric.
    """
    
    app_flow_config: Optional[shared_appflowconfig.AppFlowConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppFlowConfig') }})
    cloud_watch_config: Optional[shared_cloudwatchconfig.CloudWatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchConfig') }})
    rds_source_config: Optional[shared_rdssourceconfig.RdsSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RDSSourceConfig') }})
    redshift_source_config: Optional[shared_redshiftsourceconfig.RedshiftSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSourceConfig') }})
    s3_source_config: Optional[shared_s3sourceconfig.S3SourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3SourceConfig') }})
    
