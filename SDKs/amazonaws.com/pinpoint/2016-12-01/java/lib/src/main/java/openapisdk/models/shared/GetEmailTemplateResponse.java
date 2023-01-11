package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEmailTemplateResponse {
    @JsonProperty("EmailTemplateResponse")
    public EmailTemplateResponse emailTemplateResponse;
    public GetEmailTemplateResponse withEmailTemplateResponse(EmailTemplateResponse emailTemplateResponse) {
        this.emailTemplateResponse = emailTemplateResponse;
        return this;
    }
}