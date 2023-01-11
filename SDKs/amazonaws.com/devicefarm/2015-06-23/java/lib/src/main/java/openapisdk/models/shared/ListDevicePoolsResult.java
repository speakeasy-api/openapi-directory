package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicePoolsResult
 * Represents the result of a list device pools request.
**/
public class ListDevicePoolsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePools")
    public DevicePool[] devicePools;
    public ListDevicePoolsResult withDevicePools(DevicePool[] devicePools) {
        this.devicePools = devicePools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDevicePoolsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}