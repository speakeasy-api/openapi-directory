package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlobMetadata
 * Returns information about a specific Git blob object.
**/
public class BlobMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobId")
    public String blobId;
    public BlobMetadata withBlobId(String blobId) {
        this.blobId = blobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public BlobMetadata withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public BlobMetadata withPath(String path) {
        this.path = path;
        return this;
    }
}