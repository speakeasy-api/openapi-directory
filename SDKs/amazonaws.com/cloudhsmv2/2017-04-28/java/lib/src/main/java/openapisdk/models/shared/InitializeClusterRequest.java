package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InitializeClusterRequest {
    @JsonProperty("ClusterId")
    public String clusterId;
    public InitializeClusterRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonProperty("SignedCert")
    public String signedCert;
    public InitializeClusterRequest withSignedCert(String signedCert) {
        this.signedCert = signedCert;
        return this;
    }
    @JsonProperty("TrustAnchor")
    public String trustAnchor;
    public InitializeClusterRequest withTrustAnchor(String trustAnchor) {
        this.trustAnchor = trustAnchor;
        return this;
    }
}