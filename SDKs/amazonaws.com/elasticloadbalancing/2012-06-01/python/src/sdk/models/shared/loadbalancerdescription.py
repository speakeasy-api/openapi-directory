import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import backendserverdescription as shared_backendserverdescription
from ..shared import healthcheck as shared_healthcheck
from ..shared import instance as shared_instance
from ..shared import listenerdescription as shared_listenerdescription
from ..shared import policies as shared_policies
from ..shared import sourcesecuritygroup as shared_sourcesecuritygroup


@dataclasses.dataclass
class LoadBalancerDescription:
    r"""LoadBalancerDescription
    Information about a load balancer.
    """
    
    availability_zones: Optional[list[str]] = dataclasses.field(default=None)
    backend_server_descriptions: Optional[list[shared_backendserverdescription.BackendServerDescription]] = dataclasses.field(default=None)
    canonical_hosted_zone_name: Optional[str] = dataclasses.field(default=None)
    canonical_hosted_zone_name_id: Optional[str] = dataclasses.field(default=None)
    created_time: Optional[datetime] = dataclasses.field(default=None)
    dns_name: Optional[str] = dataclasses.field(default=None)
    health_check: Optional[shared_healthcheck.HealthCheck] = dataclasses.field(default=None)
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    listener_descriptions: Optional[list[shared_listenerdescription.ListenerDescription]] = dataclasses.field(default=None)
    load_balancer_name: Optional[str] = dataclasses.field(default=None)
    policies: Optional[shared_policies.Policies] = dataclasses.field(default=None)
    scheme: Optional[str] = dataclasses.field(default=None)
    security_groups: Optional[list[str]] = dataclasses.field(default=None)
    source_security_group: Optional[shared_sourcesecuritygroup.SourceSecurityGroup] = dataclasses.field(default=None)
    subnets: Optional[list[str]] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
