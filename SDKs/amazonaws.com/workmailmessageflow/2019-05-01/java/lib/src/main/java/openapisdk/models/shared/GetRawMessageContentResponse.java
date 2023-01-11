package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRawMessageContentResponse {
    @JsonProperty("messageContent")
    public String messageContent;
    public GetRawMessageContentResponse withMessageContent(String messageContent) {
        this.messageContent = messageContent;
        return this;
    }
}