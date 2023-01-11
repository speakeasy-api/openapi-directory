package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInstanceProfileRequest {
    @JsonProperty("arn")
    public String arn;
    public GetInstanceProfileRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}