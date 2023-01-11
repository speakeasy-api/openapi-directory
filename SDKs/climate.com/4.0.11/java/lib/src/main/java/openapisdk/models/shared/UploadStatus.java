package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadStatus {
    @JsonProperty("id")
    public String id;
    public UploadStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public UploadStatusStatusEnum status;
    public UploadStatus withStatus(UploadStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}