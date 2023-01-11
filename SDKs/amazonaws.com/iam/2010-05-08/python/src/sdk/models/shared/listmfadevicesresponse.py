import dataclasses
from typing import Optional
from ..shared import mfadevice as shared_mfadevice


@dataclasses.dataclass
class ListMfaDevicesResponse:
    r"""ListMfaDevicesResponse
    Contains the response to a successful <a>ListMFADevices</a> request. 
    """
    
    mfa_devices: list[shared_mfadevice.MfaDevice] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
