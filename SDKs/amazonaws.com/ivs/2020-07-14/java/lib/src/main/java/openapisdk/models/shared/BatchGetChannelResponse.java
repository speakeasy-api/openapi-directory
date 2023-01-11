package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public Channel[] channels;
    public BatchGetChannelResponse withChannels(Channel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchError[] errors;
    public BatchGetChannelResponse withErrors(BatchError[] errors) {
        this.errors = errors;
        return this;
    }
}