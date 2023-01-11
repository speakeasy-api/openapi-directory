package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRunRequest
 * Represents a request to the get run operation.
**/
public class GetRunRequest {
    @JsonProperty("arn")
    public String arn;
    public GetRunRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}