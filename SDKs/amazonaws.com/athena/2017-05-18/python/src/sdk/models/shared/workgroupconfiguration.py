import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineversion as shared_engineversion
from ..shared import resultconfiguration as shared_resultconfiguration


@dataclass_json
@dataclasses.dataclass
class WorkGroupConfiguration:
    r"""WorkGroupConfiguration
    The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup settings override query settings, and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. 
    """
    
    bytes_scanned_cutoff_per_query: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesScannedCutoffPerQuery') }})
    enforce_work_group_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnforceWorkGroupConfiguration') }})
    engine_version: Optional[shared_engineversion.EngineVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    publish_cloud_watch_metrics_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublishCloudWatchMetricsEnabled') }})
    requester_pays_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterPaysEnabled') }})
    result_configuration: Optional[shared_resultconfiguration.ResultConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    
