package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworkProfileRequest {
    @JsonProperty("arn")
    public String arn;
    public GetNetworkProfileRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}