package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddAttachmentsToSetResponse
 * The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
**/
public class AddAttachmentsToSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentSetId")
    public String attachmentSetId;
    public AddAttachmentsToSetResponse withAttachmentSetId(String attachmentSetId) {
        this.attachmentSetId = attachmentSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTime")
    public String expiryTime;
    public AddAttachmentsToSetResponse withExpiryTime(String expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
}