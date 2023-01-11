package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAttachmentRequest {
    @JsonProperty("attachmentId")
    public String attachmentId;
    public DescribeAttachmentRequest withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
}