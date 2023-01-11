package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInAppMessagesResponse {
    @JsonProperty("InAppMessagesResponse")
    public InAppMessagesResponse inAppMessagesResponse;
    public GetInAppMessagesResponse withInAppMessagesResponse(InAppMessagesResponse inAppMessagesResponse) {
        this.inAppMessagesResponse = inAppMessagesResponse;
        return this;
    }
}