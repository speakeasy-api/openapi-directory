import dataclasses
from typing import Optional
from ..shared import dnsruledescriptor as shared_dnsruledescriptor
from ..shared import appexternalcpd as shared_appexternalcpd
from ..shared import featuredependency as shared_featuredependency
from ..shared import latencydescriptor as shared_latencydescriptor
from ..shared import servicedependency as shared_servicedependency
from ..shared import servicedescriptor as shared_servicedescriptor
from ..shared import trafficruledescriptor as shared_trafficruledescriptor
from ..shared import transportdependency as shared_transportdependency


@dataclasses.dataclass
class AppD:
    app_d_id: str = dataclasses.field()
    app_d_version: str = dataclasses.field()
    app_description: str = dataclasses.field()
    app_name: str = dataclasses.field()
    app_provider: str = dataclasses.field()
    app_soft_version: str = dataclasses.field()
    mec_version: list[str] = dataclasses.field()
    sw_image_descriptor: str = dataclasses.field()
    virtual_compute_descriptor: str = dataclasses.field()
    app_dns_rule: Optional[list[shared_dnsruledescriptor.DNSRuleDescriptor]] = dataclasses.field(default=None)
    app_ext_cpd: Optional[list[shared_appexternalcpd.AppExternalCpd]] = dataclasses.field(default=None)
    app_feature_optional: Optional[list[shared_featuredependency.FeatureDependency]] = dataclasses.field(default=None)
    app_feature_required: Optional[list[shared_featuredependency.FeatureDependency]] = dataclasses.field(default=None)
    app_info_name: Optional[str] = dataclasses.field(default=None)
    app_latency: Optional[shared_latencydescriptor.LatencyDescriptor] = dataclasses.field(default=None)
    app_service_optional: Optional[list[shared_servicedependency.ServiceDependency]] = dataclasses.field(default=None)
    app_service_produced: Optional[list[shared_servicedescriptor.ServiceDescriptor]] = dataclasses.field(default=None)
    app_service_required: Optional[list[shared_servicedependency.ServiceDependency]] = dataclasses.field(default=None)
    app_traffic_rule: Optional[list[shared_trafficruledescriptor.TrafficRuleDescriptor]] = dataclasses.field(default=None)
    change_app_instance_state_op_config: Optional[str] = dataclasses.field(default=None)
    terminate_app_instance_op_config: Optional[str] = dataclasses.field(default=None)
    transport_dependencies: Optional[list[shared_transportdependency.TransportDependency]] = dataclasses.field(default=None)
    virtual_storage_descriptor: Optional[list[str]] = dataclasses.field(default=None)
    
