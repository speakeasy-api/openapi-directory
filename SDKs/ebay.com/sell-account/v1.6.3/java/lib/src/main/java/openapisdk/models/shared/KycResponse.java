package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KycResponse
 * This is the base response type of the getKYC method.
**/
public class KycResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kycChecks")
    public KycCheck[] kycChecks;
    public KycResponse withKycChecks(KycCheck[] kycChecks) {
        this.kycChecks = kycChecks;
        return this;
    }
}