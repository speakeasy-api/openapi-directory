package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUploadStatusRequest {
    @JsonProperty("uploadId")
    public String uploadId;
    public GetUploadStatusRequest withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
}