package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDeviceRequestBody {
    @JsonProperty("DeviceId")
    public String deviceId;
    public DescribeDeviceRequestBody withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeDeviceRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}