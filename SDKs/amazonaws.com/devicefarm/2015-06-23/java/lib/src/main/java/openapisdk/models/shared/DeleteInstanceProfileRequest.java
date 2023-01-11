package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteInstanceProfileRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteInstanceProfileRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}