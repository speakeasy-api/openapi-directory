import dataclasses
from typing import Optional
from ..shared import truststoreinfo as shared_truststoreinfo


@dataclasses.dataclass
class GetTruststoreInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    truststore_info: Optional[shared_truststoreinfo.TruststoreInfo] = dataclasses.field(default=None)
    get_truststore_info_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
