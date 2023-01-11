package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBucketRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public CreateBucketRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("bundleId")
    public String bundleId;
    public CreateBucketRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableObjectVersioning")
    public Boolean enableObjectVersioning;
    public CreateBucketRequest withEnableObjectVersioning(Boolean enableObjectVersioning) {
        this.enableObjectVersioning = enableObjectVersioning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateBucketRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}