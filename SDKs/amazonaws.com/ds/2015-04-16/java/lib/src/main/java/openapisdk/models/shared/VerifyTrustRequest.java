package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VerifyTrustRequest
 * Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
**/
public class VerifyTrustRequest {
    @JsonProperty("TrustId")
    public String trustId;
    public VerifyTrustRequest withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}