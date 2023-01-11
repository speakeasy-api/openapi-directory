package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRegistrationCodeResponse
 * The output from the GetRegistrationCode operation.
**/
public class GetRegistrationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationCode")
    public String registrationCode;
    public GetRegistrationCodeResponse withRegistrationCode(String registrationCode) {
        this.registrationCode = registrationCode;
        return this;
    }
}