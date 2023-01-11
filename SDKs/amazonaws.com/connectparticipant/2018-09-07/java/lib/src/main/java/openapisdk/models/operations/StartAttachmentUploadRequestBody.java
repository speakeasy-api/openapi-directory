package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartAttachmentUploadRequestBody {
    @JsonProperty("AttachmentName")
    public String attachmentName;
    public StartAttachmentUploadRequestBody withAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
        return this;
    }
    @JsonProperty("AttachmentSizeInBytes")
    public Long attachmentSizeInBytes;
    public StartAttachmentUploadRequestBody withAttachmentSizeInBytes(Long attachmentSizeInBytes) {
        this.attachmentSizeInBytes = attachmentSizeInBytes;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public StartAttachmentUploadRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("ContentType")
    public String contentType;
    public StartAttachmentUploadRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}