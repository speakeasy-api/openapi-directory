package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDeviceRegistrationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheTTL")
    public String cacheTTL;
    public GetDeviceRegistrationResult withCacheTtl(String cacheTTL) {
        this.cacheTTL = cacheTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceRegistration")
    public String deviceRegistration;
    public GetDeviceRegistrationResult withDeviceRegistration(String deviceRegistration) {
        this.deviceRegistration = deviceRegistration;
        return this;
    }
}