package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetDeviceRequest
 * Represents a request to the get device request.
**/
public class GetDeviceRequest {
    @JsonProperty("arn")
    public String arn;
    public GetDeviceRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}