package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSmsTemplateResponse {
    @JsonProperty("CreateTemplateMessageBody")
    public CreateTemplateMessageBody createTemplateMessageBody;
    public CreateSmsTemplateResponse withCreateTemplateMessageBody(CreateTemplateMessageBody createTemplateMessageBody) {
        this.createTemplateMessageBody = createTemplateMessageBody;
        return this;
    }
}