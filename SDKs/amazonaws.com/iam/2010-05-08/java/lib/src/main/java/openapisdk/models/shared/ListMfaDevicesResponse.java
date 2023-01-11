package openapisdk.models.shared;



/**
 * ListMfaDevicesResponse
 * Contains the response to a successful <a>ListMFADevices</a> request. 
**/
public class ListMfaDevicesResponse {
    public Boolean isTruncated;
    public ListMfaDevicesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public MfaDevice[] mfaDevices;
    public ListMfaDevicesResponse withMfaDevices(MfaDevice[] mfaDevices) {
        this.mfaDevices = mfaDevices;
        return this;
    }
    public String marker;
    public ListMfaDevicesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}