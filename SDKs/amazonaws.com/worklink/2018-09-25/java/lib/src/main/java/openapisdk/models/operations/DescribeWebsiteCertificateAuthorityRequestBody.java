package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWebsiteCertificateAuthorityRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeWebsiteCertificateAuthorityRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonProperty("WebsiteCaId")
    public String websiteCaId;
    public DescribeWebsiteCertificateAuthorityRequestBody withWebsiteCaId(String websiteCaId) {
        this.websiteCaId = websiteCaId;
        return this;
    }
}