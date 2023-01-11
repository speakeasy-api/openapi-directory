package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCaCertificateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationConfig")
    public UpdateCaCertificateRequestBodyRegistrationConfig registrationConfig;
    public UpdateCaCertificateRequestBody withRegistrationConfig(UpdateCaCertificateRequestBodyRegistrationConfig registrationConfig) {
        this.registrationConfig = registrationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeAutoRegistration")
    public Boolean removeAutoRegistration;
    public UpdateCaCertificateRequestBody withRemoveAutoRegistration(Boolean removeAutoRegistration) {
        this.removeAutoRegistration = removeAutoRegistration;
        return this;
    }
}