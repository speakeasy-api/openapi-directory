package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutMessageRequestBody {
    @JsonProperty("channelName")
    public String channelName;
    public BatchPutMessageRequestBody withChannelName(String channelName) {
        this.channelName = channelName;
        return this;
    }
    @JsonProperty("messages")
    public openapisdk.models.shared.Message[] messages;
    public BatchPutMessageRequestBody withMessages(openapisdk.models.shared.Message[] messages) {
        this.messages = messages;
        return this;
    }
}