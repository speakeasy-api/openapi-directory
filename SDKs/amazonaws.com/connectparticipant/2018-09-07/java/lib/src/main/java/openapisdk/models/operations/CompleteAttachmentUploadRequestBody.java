package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CompleteAttachmentUploadRequestBody {
    @JsonProperty("AttachmentIds")
    public String[] attachmentIds;
    public CompleteAttachmentUploadRequestBody withAttachmentIds(String[] attachmentIds) {
        this.attachmentIds = attachmentIds;
        return this;
    }
    @JsonProperty("ClientToken")
    public String clientToken;
    public CompleteAttachmentUploadRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}