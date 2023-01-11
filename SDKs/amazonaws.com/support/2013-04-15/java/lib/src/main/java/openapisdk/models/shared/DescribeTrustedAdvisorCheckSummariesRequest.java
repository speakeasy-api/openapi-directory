package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTrustedAdvisorCheckSummariesRequest {
    @JsonProperty("checkIds")
    public String[] checkIds;
    public DescribeTrustedAdvisorCheckSummariesRequest withCheckIds(String[] checkIds) {
        this.checkIds = checkIds;
        return this;
    }
}