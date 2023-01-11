package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadEntityDefinitionsResponse {
    @JsonProperty("uploadId")
    public String uploadId;
    public UploadEntityDefinitionsResponse withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}