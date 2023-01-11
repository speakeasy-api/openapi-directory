package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhoneNumberValidateResponse {
    @JsonProperty("NumberValidateResponse")
    public NumberValidateResponse numberValidateResponse;
    public PhoneNumberValidateResponse withNumberValidateResponse(NumberValidateResponse numberValidateResponse) {
        this.numberValidateResponse = numberValidateResponse;
        return this;
    }
}