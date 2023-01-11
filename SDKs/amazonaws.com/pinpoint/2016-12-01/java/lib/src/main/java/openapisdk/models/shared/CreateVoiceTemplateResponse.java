package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateVoiceTemplateResponse {
    @JsonProperty("CreateTemplateMessageBody")
    public CreateTemplateMessageBody createTemplateMessageBody;
    public CreateVoiceTemplateResponse withCreateTemplateMessageBody(CreateTemplateMessageBody createTemplateMessageBody) {
        this.createTemplateMessageBody = createTemplateMessageBody;
        return this;
    }
}