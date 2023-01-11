package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEmailTemplateRequestBody {
    @JsonProperty("EmailTemplateRequest")
    public CreateEmailTemplateRequestBodyEmailTemplateRequest emailTemplateRequest;
    public CreateEmailTemplateRequestBody withEmailTemplateRequest(CreateEmailTemplateRequestBodyEmailTemplateRequest emailTemplateRequest) {
        this.emailTemplateRequest = emailTemplateRequest;
        return this;
    }
}