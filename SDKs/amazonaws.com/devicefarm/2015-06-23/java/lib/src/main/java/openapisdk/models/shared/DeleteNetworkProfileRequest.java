package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteNetworkProfileRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteNetworkProfileRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}