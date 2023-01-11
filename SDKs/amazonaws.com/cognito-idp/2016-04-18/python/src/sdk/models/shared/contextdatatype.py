import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpheader as shared_httpheader


@dataclass_json
@dataclasses.dataclass
class ContextDataType:
    r"""ContextDataType
    Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
    """
    
    http_headers: list[shared_httpheader.HTTPHeader] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpHeaders') }})
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    server_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPath') }})
    encoded_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncodedData') }})
    
