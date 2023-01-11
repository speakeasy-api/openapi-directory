package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartAttachmentUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachmentId")
    public String attachmentId;
    public StartAttachmentUploadResponse withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UploadMetadata")
    public UploadMetadata uploadMetadata;
    public StartAttachmentUploadResponse withUploadMetadata(UploadMetadata uploadMetadata) {
        this.uploadMetadata = uploadMetadata;
        return this;
    }
}