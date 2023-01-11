import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upload as shared_upload


@dataclass_json
@dataclasses.dataclass
class InstallToRemoteAccessSessionResult:
    r"""InstallToRemoteAccessSessionResult
    Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
    """
    
    app_upload: Optional[shared_upload.Upload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUpload') }})
    
