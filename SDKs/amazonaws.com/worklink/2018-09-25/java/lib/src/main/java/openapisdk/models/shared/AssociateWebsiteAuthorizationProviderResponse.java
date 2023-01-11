package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateWebsiteAuthorizationProviderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationProviderId")
    public String authorizationProviderId;
    public AssociateWebsiteAuthorizationProviderResponse withAuthorizationProviderId(String authorizationProviderId) {
        this.authorizationProviderId = authorizationProviderId;
        return this;
    }
}