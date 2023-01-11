package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailTemplateRequestBody {
    @JsonProperty("EmailTemplateRequest")
    public UpdateEmailTemplateRequestBodyEmailTemplateRequest emailTemplateRequest;
    public UpdateEmailTemplateRequestBody withEmailTemplateRequest(UpdateEmailTemplateRequestBodyEmailTemplateRequest emailTemplateRequest) {
        this.emailTemplateRequest = emailTemplateRequest;
        return this;
    }
}