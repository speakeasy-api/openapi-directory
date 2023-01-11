package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRunRequest
 * Represents a request to the delete run operation.
**/
public class DeleteRunRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteRunRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}