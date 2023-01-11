import dataclasses
from ..shared import virtualmfadevice as shared_virtualmfadevice


@dataclasses.dataclass
class CreateVirtualMfaDeviceResponse:
    r"""CreateVirtualMfaDeviceResponse
    Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
    """
    
    virtual_mfa_device: shared_virtualmfadevice.VirtualMfaDevice = dataclasses.field()
    
