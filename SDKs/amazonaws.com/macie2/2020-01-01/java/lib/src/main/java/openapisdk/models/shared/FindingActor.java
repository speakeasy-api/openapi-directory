package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingActor
 * Provides information about an entity that performed an action that produced a policy finding for a resource.
**/
public class FindingActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainDetails")
    public DomainDetails domainDetails;
    public FindingActor withDomainDetails(DomainDetails domainDetails) {
        this.domainDetails = domainDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressDetails")
    public IpAddressDetails ipAddressDetails;
    public FindingActor withIpAddressDetails(IpAddressDetails ipAddressDetails) {
        this.ipAddressDetails = ipAddressDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userIdentity")
    public UserIdentity userIdentity;
    public FindingActor withUserIdentity(UserIdentity userIdentity) {
        this.userIdentity = userIdentity;
        return this;
    }
}