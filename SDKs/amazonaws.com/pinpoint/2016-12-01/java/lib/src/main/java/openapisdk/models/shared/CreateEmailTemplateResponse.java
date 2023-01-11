package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEmailTemplateResponse {
    @JsonProperty("CreateTemplateMessageBody")
    public CreateTemplateMessageBody createTemplateMessageBody;
    public CreateEmailTemplateResponse withCreateTemplateMessageBody(CreateTemplateMessageBody createTemplateMessageBody) {
        this.createTemplateMessageBody = createTemplateMessageBody;
        return this;
    }
}