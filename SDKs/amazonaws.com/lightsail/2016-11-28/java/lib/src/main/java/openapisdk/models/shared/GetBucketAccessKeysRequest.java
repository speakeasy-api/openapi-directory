package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBucketAccessKeysRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public GetBucketAccessKeysRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
}