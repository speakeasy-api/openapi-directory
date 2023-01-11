package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachmentDetails
 * The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
**/
public class AttachmentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentId")
    public String attachmentId;
    public AttachmentDetails withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public AttachmentDetails withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
}