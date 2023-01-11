package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreDomainAccessRequestBody {
    @JsonProperty("DomainName")
    public String domainName;
    public RestoreDomainAccessRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public RestoreDomainAccessRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}