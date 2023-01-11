package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSmsTemplateResponse {
    @JsonProperty("SMSTemplateResponse")
    public SmsTemplateResponse smsTemplateResponse;
    public GetSmsTemplateResponse withSmsTemplateResponse(SmsTemplateResponse smsTemplateResponse) {
        this.smsTemplateResponse = smsTemplateResponse;
        return this;
    }
}