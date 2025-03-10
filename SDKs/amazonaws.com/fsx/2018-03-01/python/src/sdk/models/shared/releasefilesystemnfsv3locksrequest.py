"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReleaseFileSystemNfsV3LocksRequest:
    
    file_system_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FileSystemId') }})
    r"""The globally unique ID of the file system, assigned by Amazon FSx."""  
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ClientRequestToken'), 'exclude': lambda f: f is None }})
    r"""(Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK."""  
    