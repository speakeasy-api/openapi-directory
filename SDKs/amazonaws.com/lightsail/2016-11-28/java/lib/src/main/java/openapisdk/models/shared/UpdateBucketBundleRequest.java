package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBucketBundleRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public UpdateBucketBundleRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("bundleId")
    public String bundleId;
    public UpdateBucketBundleRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
}