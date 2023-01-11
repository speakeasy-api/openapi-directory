package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachmentItem
 * The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded.
**/
public class AttachmentItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachmentId")
    public String attachmentId;
    public AttachmentItem withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachmentName")
    public String attachmentName;
    public AttachmentItem withAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public String contentType;
    public AttachmentItem withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ArtifactStatusEnum status;
    public AttachmentItem withStatus(ArtifactStatusEnum status) {
        this.status = status;
        return this;
    }
}