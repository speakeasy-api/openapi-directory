package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBucketAccessKeyRequest {
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public DeleteBucketAccessKeyRequest withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonProperty("bucketName")
    public String bucketName;
    public DeleteBucketAccessKeyRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
}