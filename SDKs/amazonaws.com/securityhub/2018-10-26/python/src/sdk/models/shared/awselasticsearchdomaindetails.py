import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselasticsearchdomaindomainendpointoptions as shared_awselasticsearchdomaindomainendpointoptions
from ..shared import awselasticsearchdomainelasticsearchclusterconfigdetails as shared_awselasticsearchdomainelasticsearchclusterconfigdetails
from ..shared import awselasticsearchdomainencryptionatrestoptions as shared_awselasticsearchdomainencryptionatrestoptions
from ..shared import awselasticsearchdomainlogpublishingoptions as shared_awselasticsearchdomainlogpublishingoptions
from ..shared import awselasticsearchdomainnodetonodeencryptionoptions as shared_awselasticsearchdomainnodetonodeencryptionoptions
from ..shared import awselasticsearchdomainservicesoftwareoptions as shared_awselasticsearchdomainservicesoftwareoptions
from ..shared import awselasticsearchdomainvpcoptions as shared_awselasticsearchdomainvpcoptions


@dataclass_json
@dataclasses.dataclass
class AwsElasticsearchDomainDetails:
    r"""AwsElasticsearchDomainDetails
    Information about an Amazon Elasticsearch Service domain.
    """
    
    access_policies: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessPolicies') }})
    domain_endpoint_options: Optional[shared_awselasticsearchdomaindomainendpointoptions.AwsElasticsearchDomainDomainEndpointOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainEndpointOptions') }})
    domain_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainId') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    elasticsearch_cluster_config: Optional[shared_awselasticsearchdomainelasticsearchclusterconfigdetails.AwsElasticsearchDomainElasticsearchClusterConfigDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchClusterConfig') }})
    elasticsearch_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchVersion') }})
    encryption_at_rest_options: Optional[shared_awselasticsearchdomainencryptionatrestoptions.AwsElasticsearchDomainEncryptionAtRestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAtRestOptions') }})
    endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    endpoints: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    log_publishing_options: Optional[shared_awselasticsearchdomainlogpublishingoptions.AwsElasticsearchDomainLogPublishingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPublishingOptions') }})
    node_to_node_encryption_options: Optional[shared_awselasticsearchdomainnodetonodeencryptionoptions.AwsElasticsearchDomainNodeToNodeEncryptionOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeToNodeEncryptionOptions') }})
    service_software_options: Optional[shared_awselasticsearchdomainservicesoftwareoptions.AwsElasticsearchDomainServiceSoftwareOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceSoftwareOptions') }})
    vpc_options: Optional[shared_awselasticsearchdomainvpcoptions.AwsElasticsearchDomainVpcOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPCOptions') }})
    
