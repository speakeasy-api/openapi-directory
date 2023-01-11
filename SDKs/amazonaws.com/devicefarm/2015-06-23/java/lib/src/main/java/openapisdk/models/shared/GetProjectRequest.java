package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetProjectRequest
 * Represents a request to the get project operation.
**/
public class GetProjectRequest {
    @JsonProperty("arn")
    public String arn;
    public GetProjectRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}