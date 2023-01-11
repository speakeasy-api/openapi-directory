package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RevokeDomainAccessRequestBody {
    @JsonProperty("DomainName")
    public String domainName;
    public RevokeDomainAccessRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public RevokeDomainAccessRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}