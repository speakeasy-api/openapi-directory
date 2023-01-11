package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchPutMessageRequestBody {
    @JsonProperty("messages")
    public openapisdk.models.shared.Message[] messages;
    public BatchPutMessageRequestBody withMessages(openapisdk.models.shared.Message[] messages) {
        this.messages = messages;
        return this;
    }
}