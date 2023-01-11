package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateDomainRequestBody {
    @JsonProperty("AcmCertificateArn")
    public String acmCertificateArn;
    public AssociateDomainRequestBody withAcmCertificateArn(String acmCertificateArn) {
        this.acmCertificateArn = acmCertificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public AssociateDomainRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public AssociateDomainRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public AssociateDomainRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}