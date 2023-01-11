package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueuePlayPointer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentIdentifier")
    public String contentIdentifier;
    public QueuePlayPointer withContentIdentifier(String contentIdentifier) {
        this.contentIdentifier = contentIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetInMillis")
    public Long offsetInMillis;
    public QueuePlayPointer withOffsetInMillis(Long offsetInMillis) {
        this.offsetInMillis = offsetInMillis;
        return this;
    }
}