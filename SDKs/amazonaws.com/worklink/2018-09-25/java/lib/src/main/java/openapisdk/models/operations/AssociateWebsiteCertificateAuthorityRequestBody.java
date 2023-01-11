package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateWebsiteCertificateAuthorityRequestBody {
    @JsonProperty("Certificate")
    public String certificate;
    public AssociateWebsiteCertificateAuthorityRequestBody withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public AssociateWebsiteCertificateAuthorityRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public AssociateWebsiteCertificateAuthorityRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}