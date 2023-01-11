package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineOutputConfig
 * The <code>PipelineOutputConfig</code> structure.
**/
public class PipelineOutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bucket")
    public String bucket;
    public PipelineOutputConfig withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public Permission[] permissions;
    public PipelineOutputConfig withPermissions(Permission[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageClass")
    public String storageClass;
    public PipelineOutputConfig withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}