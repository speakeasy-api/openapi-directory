package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Devices")
    public java.util.Map<String, Object> devices;
    public ListDevicesResponse withDevices(java.util.Map<String, Object> devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public java.util.Map<String, Object> nextToken;
    public ListDevicesResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}