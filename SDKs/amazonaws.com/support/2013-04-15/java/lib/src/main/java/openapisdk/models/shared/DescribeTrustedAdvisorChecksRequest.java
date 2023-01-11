package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTrustedAdvisorChecksRequest {
    @JsonProperty("language")
    public String language;
    public DescribeTrustedAdvisorChecksRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
}