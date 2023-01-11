package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateDomainRequestBody {
    @JsonProperty("DomainName")
    public String domainName;
    public DisassociateDomainRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DisassociateDomainRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}