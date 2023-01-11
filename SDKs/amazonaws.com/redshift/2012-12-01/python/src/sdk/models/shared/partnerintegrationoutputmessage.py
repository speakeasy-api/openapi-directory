import dataclasses
from typing import Optional


@dataclasses.dataclass
class PartnerIntegrationOutputMessage:
    database_name: Optional[str] = dataclasses.field(default=None)
    partner_name: Optional[str] = dataclasses.field(default=None)
    
