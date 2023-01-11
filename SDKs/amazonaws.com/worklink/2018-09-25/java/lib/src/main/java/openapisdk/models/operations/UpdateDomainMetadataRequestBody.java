package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainMetadataRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public UpdateDomainMetadataRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public UpdateDomainMetadataRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateDomainMetadataRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}