import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTruststoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_truststore_default_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
