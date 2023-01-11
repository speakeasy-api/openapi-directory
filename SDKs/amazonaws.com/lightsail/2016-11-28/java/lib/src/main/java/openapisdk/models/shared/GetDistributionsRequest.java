package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDistributionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributionName")
    public String distributionName;
    public GetDistributionsRequest withDistributionName(String distributionName) {
        this.distributionName = distributionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetDistributionsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}