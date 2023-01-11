package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RefreshTrustedAdvisorCheckRequest
 * <p/>
**/
public class RefreshTrustedAdvisorCheckRequest {
    @JsonProperty("checkId")
    public String checkId;
    public RefreshTrustedAdvisorCheckRequest withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
}