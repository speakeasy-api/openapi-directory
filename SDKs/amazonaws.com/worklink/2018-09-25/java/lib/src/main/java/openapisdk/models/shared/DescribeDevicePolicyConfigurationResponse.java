package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDevicePolicyConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceCaCertificate")
    public String deviceCaCertificate;
    public DescribeDevicePolicyConfigurationResponse withDeviceCaCertificate(String deviceCaCertificate) {
        this.deviceCaCertificate = deviceCaCertificate;
        return this;
    }
}