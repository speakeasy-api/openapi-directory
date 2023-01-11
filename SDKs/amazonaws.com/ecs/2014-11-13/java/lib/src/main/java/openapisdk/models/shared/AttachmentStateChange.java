package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AttachmentStateChange
 * An object representing a change in state for a task attachment.
**/
public class AttachmentStateChange {
    @JsonProperty("attachmentArn")
    public String attachmentArn;
    public AttachmentStateChange withAttachmentArn(String attachmentArn) {
        this.attachmentArn = attachmentArn;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public AttachmentStateChange withStatus(String status) {
        this.status = status;
        return this;
    }
}