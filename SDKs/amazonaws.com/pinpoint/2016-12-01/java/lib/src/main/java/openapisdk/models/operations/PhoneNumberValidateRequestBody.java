package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhoneNumberValidateRequestBody {
    @JsonProperty("NumberValidateRequest")
    public PhoneNumberValidateRequestBodyNumberValidateRequest numberValidateRequest;
    public PhoneNumberValidateRequestBody withNumberValidateRequest(PhoneNumberValidateRequestBodyNumberValidateRequest numberValidateRequest) {
        this.numberValidateRequest = numberValidateRequest;
        return this;
    }
}