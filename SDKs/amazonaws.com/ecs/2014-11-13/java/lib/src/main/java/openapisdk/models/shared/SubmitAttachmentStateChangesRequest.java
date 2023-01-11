package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitAttachmentStateChangesRequest {
    @JsonProperty("attachments")
    public AttachmentStateChange[] attachments;
    public SubmitAttachmentStateChangesRequest withAttachments(AttachmentStateChange[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public SubmitAttachmentStateChangesRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
}