package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDistributionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributions")
    public LightsailDistribution[] distributions;
    public GetDistributionsResult withDistributions(LightsailDistribution[] distributions) {
        this.distributions = distributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetDistributionsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}