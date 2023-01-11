package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicePoolsRequest
 * Represents the result of a list device pools request.
**/
public class ListDevicePoolsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListDevicePoolsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDevicePoolsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DevicePoolTypeEnum type;
    public ListDevicePoolsRequest withType(DevicePoolTypeEnum type) {
        this.type = type;
        return this;
    }
}