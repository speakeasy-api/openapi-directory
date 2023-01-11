package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSmsTemplateRequestBody {
    @JsonProperty("SMSTemplateRequest")
    public UpdateSmsTemplateRequestBodySmsTemplateRequest smsTemplateRequest;
    public UpdateSmsTemplateRequestBody withSmsTemplateRequest(UpdateSmsTemplateRequestBodySmsTemplateRequest smsTemplateRequest) {
        this.smsTemplateRequest = smsTemplateRequest;
        return this;
    }
}