package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeviceInstancesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceInstances")
    public DeviceInstance[] deviceInstances;
    public ListDeviceInstancesResult withDeviceInstances(DeviceInstance[] deviceInstances) {
        this.deviceInstances = deviceInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDeviceInstancesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}