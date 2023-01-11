package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopRunRequest
 * Represents the request to stop a specific run.
**/
public class StopRunRequest {
    @JsonProperty("arn")
    public String arn;
    public StopRunRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}