package openapisdk.models.shared;



/**
 * CreateVirtualMfaDeviceResponse
 * Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
**/
public class CreateVirtualMfaDeviceResponse {
    public VirtualMfaDevice virtualMFADevice;
    public CreateVirtualMfaDeviceResponse withVirtualMfaDevice(VirtualMfaDevice virtualMFADevice) {
        this.virtualMFADevice = virtualMFADevice;
        return this;
    }
}