package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopJobRequest {
    @JsonProperty("arn")
    public String arn;
    public StopJobRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}