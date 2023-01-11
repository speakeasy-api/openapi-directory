package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitiateLayerUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partSize")
    public Long partSize;
    public InitiateLayerUploadResponse withPartSize(Long partSize) {
        this.partSize = partSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadId")
    public String uploadId;
    public InitiateLayerUploadResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}