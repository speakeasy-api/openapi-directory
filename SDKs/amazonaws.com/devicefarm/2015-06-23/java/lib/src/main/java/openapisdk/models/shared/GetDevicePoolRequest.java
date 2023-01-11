package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDevicePoolRequest
 * Represents a request to the get device pool operation.
**/
public class GetDevicePoolRequest {
    @JsonProperty("arn")
    public String arn;
    public GetDevicePoolRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}