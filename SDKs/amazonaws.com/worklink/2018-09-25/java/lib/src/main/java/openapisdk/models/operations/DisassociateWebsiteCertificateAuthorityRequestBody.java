package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateWebsiteCertificateAuthorityRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DisassociateWebsiteCertificateAuthorityRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonProperty("WebsiteCaId")
    public String websiteCaId;
    public DisassociateWebsiteCertificateAuthorityRequestBody withWebsiteCaId(String websiteCaId) {
        this.websiteCaId = websiteCaId;
        return this;
    }
}