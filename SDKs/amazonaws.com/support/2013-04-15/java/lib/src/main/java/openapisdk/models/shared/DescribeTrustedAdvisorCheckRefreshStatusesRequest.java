package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeTrustedAdvisorCheckRefreshStatusesRequest {
    @JsonProperty("checkIds")
    public String[] checkIds;
    public DescribeTrustedAdvisorCheckRefreshStatusesRequest withCheckIds(String[] checkIds) {
        this.checkIds = checkIds;
        return this;
    }
}