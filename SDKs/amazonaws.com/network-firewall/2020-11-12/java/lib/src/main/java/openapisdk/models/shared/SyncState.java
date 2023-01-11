package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SyncState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attachment")
    public Attachment attachment;
    public SyncState withAttachment(Attachment attachment) {
        this.attachment = attachment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Config")
    public java.util.Map<String, PerObjectStatus> config;
    public SyncState withConfig(java.util.Map<String, PerObjectStatus> config) {
        this.config = config;
        return this;
    }
}