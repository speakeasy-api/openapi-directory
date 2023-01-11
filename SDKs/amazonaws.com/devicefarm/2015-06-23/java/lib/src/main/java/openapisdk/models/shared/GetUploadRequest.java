package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetUploadRequest
 * Represents a request to the get upload operation.
**/
public class GetUploadRequest {
    @JsonProperty("arn")
    public String arn;
    public GetUploadRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}