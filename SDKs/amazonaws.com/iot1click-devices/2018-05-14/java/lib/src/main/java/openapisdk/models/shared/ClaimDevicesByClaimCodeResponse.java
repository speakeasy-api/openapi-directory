package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClaimDevicesByClaimCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClaimCode")
    public java.util.Map<String, Object> claimCode;
    public ClaimDevicesByClaimCodeResponse withClaimCode(java.util.Map<String, Object> claimCode) {
        this.claimCode = claimCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public java.util.Map<String, Object> total;
    public ClaimDevicesByClaimCodeResponse withTotal(java.util.Map<String, Object> total) {
        this.total = total;
        return this;
    }
}