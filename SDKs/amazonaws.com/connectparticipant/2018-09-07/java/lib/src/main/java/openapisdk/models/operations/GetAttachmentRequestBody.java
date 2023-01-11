package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAttachmentRequestBody {
    @JsonProperty("AttachmentId")
    public String attachmentId;
    public GetAttachmentRequestBody withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
}