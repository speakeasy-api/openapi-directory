package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDevicePositionHistoryResponse {
    @JsonProperty("DevicePositions")
    public DevicePosition[] devicePositions;
    public GetDevicePositionHistoryResponse withDevicePositions(DevicePosition[] devicePositions) {
        this.devicePositions = devicePositions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDevicePositionHistoryResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}