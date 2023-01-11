import dataclasses
from typing import Optional
from ..shared import serviceendpoint as shared_serviceendpoint
from ..shared import limits as shared_limits


@dataclasses.dataclass
class DomainStatus:
    r"""DomainStatus
    The current status of the search domain.
    """
    
    domain_id: str = dataclasses.field()
    domain_name: str = dataclasses.field()
    requires_index_documents: bool = dataclasses.field()
    arn: Optional[str] = dataclasses.field(default=None)
    created: Optional[bool] = dataclasses.field(default=None)
    deleted: Optional[bool] = dataclasses.field(default=None)
    doc_service: Optional[shared_serviceendpoint.ServiceEndpoint] = dataclasses.field(default=None)
    limits: Optional[shared_limits.Limits] = dataclasses.field(default=None)
    processing: Optional[bool] = dataclasses.field(default=None)
    search_instance_count: Optional[int] = dataclasses.field(default=None)
    search_instance_type: Optional[str] = dataclasses.field(default=None)
    search_partition_count: Optional[int] = dataclasses.field(default=None)
    search_service: Optional[shared_serviceendpoint.ServiceEndpoint] = dataclasses.field(default=None)
    
