package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicesResult
 * Represents the result of a list devices operation.
**/
public class ListDevicesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public Device[] devices;
    public ListDevicesResult withDevices(Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDevicesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}