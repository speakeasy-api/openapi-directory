package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateBucketAccessKeyRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public CreateBucketAccessKeyRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
}