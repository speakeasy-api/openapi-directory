package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetResourceAccessForBucketRequest {
    @JsonProperty("access")
    public ResourceBucketAccessEnum access;
    public SetResourceAccessForBucketRequest withAccess(ResourceBucketAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("bucketName")
    public String bucketName;
    public SetResourceAccessForBucketRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public SetResourceAccessForBucketRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}