package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDevicePolicyConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceCaCertificate")
    public String deviceCaCertificate;
    public UpdateDevicePolicyConfigurationRequestBody withDeviceCaCertificate(String deviceCaCertificate) {
        this.deviceCaCertificate = deviceCaCertificate;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateDevicePolicyConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}