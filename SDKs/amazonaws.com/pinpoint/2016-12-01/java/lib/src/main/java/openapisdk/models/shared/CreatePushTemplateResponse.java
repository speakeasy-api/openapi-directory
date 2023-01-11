package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreatePushTemplateResponse {
    @JsonProperty("CreateTemplateMessageBody")
    public CreateTemplateMessageBody createTemplateMessageBody;
    public CreatePushTemplateResponse withCreateTemplateMessageBody(CreateTemplateMessageBody createTemplateMessageBody) {
        this.createTemplateMessageBody = createTemplateMessageBody;
        return this;
    }
}