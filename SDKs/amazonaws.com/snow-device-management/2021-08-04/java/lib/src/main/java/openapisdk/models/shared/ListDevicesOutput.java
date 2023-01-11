package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDevicesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public DeviceSummary[] devices;
    public ListDevicesOutput withDevices(DeviceSummary[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDevicesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}