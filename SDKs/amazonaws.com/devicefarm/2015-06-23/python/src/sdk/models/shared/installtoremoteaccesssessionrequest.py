import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InstallToRemoteAccessSessionRequest:
    r"""InstallToRemoteAccessSessionRequest
    Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
    """
    
    app_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    remote_access_session_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessSessionArn') }})
    
