package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public DeviceSummary[] devices;
    public ListDevicesResponse withDevices(DeviceSummary[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDevicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}