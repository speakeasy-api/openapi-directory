package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateWebsiteAuthorizationProviderRequestBody {
    @JsonProperty("AuthorizationProviderType")
    public AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum authorizationProviderType;
    public AssociateWebsiteAuthorizationProviderRequestBody withAuthorizationProviderType(AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum authorizationProviderType) {
        this.authorizationProviderType = authorizationProviderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public AssociateWebsiteAuthorizationProviderRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public AssociateWebsiteAuthorizationProviderRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}