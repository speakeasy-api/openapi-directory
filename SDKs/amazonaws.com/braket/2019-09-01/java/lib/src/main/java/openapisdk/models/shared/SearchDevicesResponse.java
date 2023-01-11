package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchDevicesResponse {
    @JsonProperty("devices")
    public DeviceSummary[] devices;
    public SearchDevicesResponse withDevices(DeviceSummary[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchDevicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}