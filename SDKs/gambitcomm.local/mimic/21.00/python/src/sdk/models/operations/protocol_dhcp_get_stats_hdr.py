import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolDhcpGetStatsHdrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_dhcp_get_stats_hdr_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
