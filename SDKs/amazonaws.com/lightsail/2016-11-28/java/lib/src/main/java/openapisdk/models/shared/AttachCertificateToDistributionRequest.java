package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachCertificateToDistributionRequest {
    @JsonProperty("certificateName")
    public String certificateName;
    public AttachCertificateToDistributionRequest withCertificateName(String certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonProperty("distributionName")
    public String distributionName;
    public AttachCertificateToDistributionRequest withDistributionName(String distributionName) {
        this.distributionName = distributionName;
        return this;
    }
}