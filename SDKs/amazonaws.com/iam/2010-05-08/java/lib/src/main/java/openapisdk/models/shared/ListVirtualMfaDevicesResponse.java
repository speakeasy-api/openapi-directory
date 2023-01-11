package openapisdk.models.shared;



/**
 * ListVirtualMfaDevicesResponse
 * Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
**/
public class ListVirtualMfaDevicesResponse {
    public Boolean isTruncated;
    public ListVirtualMfaDevicesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListVirtualMfaDevicesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public VirtualMfaDevice[] virtualMFADevices;
    public ListVirtualMfaDevicesResponse withVirtualMfaDevices(VirtualMfaDevice[] virtualMFADevices) {
        this.virtualMFADevices = virtualMFADevices;
        return this;
    }
}