import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpGetStatsHdrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_get_stats_hdr_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
