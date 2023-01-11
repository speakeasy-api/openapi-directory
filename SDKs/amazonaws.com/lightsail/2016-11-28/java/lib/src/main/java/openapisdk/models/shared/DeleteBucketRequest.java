package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBucketRequest {
    @JsonProperty("bucketName")
    public String bucketName;
    public DeleteBucketRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceDelete")
    public Boolean forceDelete;
    public DeleteBucketRequest withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
}