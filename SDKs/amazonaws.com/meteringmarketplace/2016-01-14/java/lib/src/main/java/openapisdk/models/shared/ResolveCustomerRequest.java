package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResolveCustomerRequest
 * Contains input to the ResolveCustomer operation.
**/
public class ResolveCustomerRequest {
    @JsonProperty("RegistrationToken")
    public String registrationToken;
    public ResolveCustomerRequest withRegistrationToken(String registrationToken) {
        this.registrationToken = registrationToken;
        return this;
    }
}