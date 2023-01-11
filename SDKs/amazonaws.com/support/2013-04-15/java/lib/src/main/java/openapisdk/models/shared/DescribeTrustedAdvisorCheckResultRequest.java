package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeTrustedAdvisorCheckResultRequest
 * <p/>
**/
public class DescribeTrustedAdvisorCheckResultRequest {
    @JsonProperty("checkId")
    public String checkId;
    public DescribeTrustedAdvisorCheckResultRequest withCheckId(String checkId) {
        this.checkId = checkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DescribeTrustedAdvisorCheckResultRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
}