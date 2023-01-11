import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails as shared_awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails


@dataclass_json
@dataclasses.dataclass
class AwsElasticsearchDomainElasticsearchClusterConfigDetails:
    r"""AwsElasticsearchDomainElasticsearchClusterConfigDetails
    details about the configuration of an Elasticsearch cluster.
    """
    
    dedicated_master_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterCount') }})
    dedicated_master_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterEnabled') }})
    dedicated_master_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedMasterType') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    zone_awareness_config: Optional[shared_awselasticsearchdomainelasticsearchclusterconfigzoneawarenessconfigdetails.AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZoneAwarenessConfig') }})
    zone_awareness_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ZoneAwarenessEnabled') }})
    
