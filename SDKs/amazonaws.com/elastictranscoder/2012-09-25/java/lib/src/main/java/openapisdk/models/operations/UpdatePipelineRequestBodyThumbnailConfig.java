package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePipelineRequestBodyThumbnailConfig
 * The <code>PipelineOutputConfig</code> structure.
**/
public class UpdatePipelineRequestBodyThumbnailConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bucket")
    public String bucket;
    public UpdatePipelineRequestBodyThumbnailConfig withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Permissions")
    public openapisdk.models.shared.Permission[] permissions;
    public UpdatePipelineRequestBodyThumbnailConfig withPermissions(openapisdk.models.shared.Permission[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageClass")
    public String storageClass;
    public UpdatePipelineRequestBodyThumbnailConfig withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
}