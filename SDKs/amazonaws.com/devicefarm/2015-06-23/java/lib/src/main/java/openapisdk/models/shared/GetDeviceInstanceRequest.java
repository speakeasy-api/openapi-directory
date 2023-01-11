package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDeviceInstanceRequest {
    @JsonProperty("arn")
    public String arn;
    public GetDeviceInstanceRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}