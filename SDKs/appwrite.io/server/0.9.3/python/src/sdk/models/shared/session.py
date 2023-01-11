import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Session:
    r"""Session
    Session
    """
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    client_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCode') }})
    client_engine: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEngine') }})
    client_engine_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientEngineVersion') }})
    client_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientType') }})
    client_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersion') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryName') }})
    current: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    device_brand: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceBrand') }})
    device_model: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceModel') }})
    device_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    expire: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    os_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osCode') }})
    os_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osName') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    provider_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerToken') }})
    provider_uid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerUid') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
