package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachCertificateFromDistributionRequest {
    @JsonProperty("distributionName")
    public String distributionName;
    public DetachCertificateFromDistributionRequest withDistributionName(String distributionName) {
        this.distributionName = distributionName;
        return this;
    }
}