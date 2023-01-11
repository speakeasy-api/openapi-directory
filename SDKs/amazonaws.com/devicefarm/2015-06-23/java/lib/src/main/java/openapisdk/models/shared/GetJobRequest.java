package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetJobRequest
 * Represents a request to the get job operation.
**/
public class GetJobRequest {
    @JsonProperty("arn")
    public String arn;
    public GetJobRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}