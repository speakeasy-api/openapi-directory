import dataclasses
from typing import Optional
from ..shared import virtualmfadevice as shared_virtualmfadevice


@dataclasses.dataclass
class ListVirtualMfaDevicesResponse:
    r"""ListVirtualMfaDevicesResponse
    Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
    """
    
    virtual_mfa_devices: list[shared_virtualmfadevice.VirtualMfaDevice] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
