package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteProjectRequest
 * Represents a request to the delete project operation.
**/
public class DeleteProjectRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteProjectRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}