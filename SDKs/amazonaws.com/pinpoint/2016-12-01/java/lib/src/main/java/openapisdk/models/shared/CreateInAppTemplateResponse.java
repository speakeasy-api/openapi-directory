package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateInAppTemplateResponse {
    @JsonProperty("TemplateCreateMessageBody")
    public TemplateCreateMessageBody templateCreateMessageBody;
    public CreateInAppTemplateResponse withTemplateCreateMessageBody(TemplateCreateMessageBody templateCreateMessageBody) {
        this.templateCreateMessageBody = templateCreateMessageBody;
        return this;
    }
}