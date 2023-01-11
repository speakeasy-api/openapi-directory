package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSmsTemplateRequestBody {
    @JsonProperty("SMSTemplateRequest")
    public CreateSmsTemplateRequestBodySmsTemplateRequest smsTemplateRequest;
    public CreateSmsTemplateRequestBody withSmsTemplateRequest(CreateSmsTemplateRequestBodySmsTemplateRequest smsTemplateRequest) {
        this.smsTemplateRequest = smsTemplateRequest;
        return this;
    }
}