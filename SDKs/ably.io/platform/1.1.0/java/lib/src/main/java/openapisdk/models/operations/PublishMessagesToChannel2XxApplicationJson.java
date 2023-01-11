package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishMessagesToChannel2XxApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public PublishMessagesToChannel2XxApplicationJson withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageId")
    public String messageId;
    public PublishMessagesToChannel2XxApplicationJson withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}