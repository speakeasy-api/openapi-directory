package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteUploadRequest
 * Represents a request to the delete upload operation.
**/
public class DeleteUploadRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteUploadRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}