package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeAttachmentResponse
 * The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
**/
public class DescribeAttachmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachment")
    public Attachment attachment;
    public DescribeAttachmentResponse withAttachment(Attachment attachment) {
        this.attachment = attachment;
        return this;
    }
}