package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAttachmentsToSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentSetId")
    public String attachmentSetId;
    public AddAttachmentsToSetRequest withAttachmentSetId(String attachmentSetId) {
        this.attachmentSetId = attachmentSetId;
        return this;
    }
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public AddAttachmentsToSetRequest withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
}