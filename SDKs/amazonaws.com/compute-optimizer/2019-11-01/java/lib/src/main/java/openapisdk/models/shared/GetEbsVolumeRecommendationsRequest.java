package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEbsVolumeRecommendationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public GetEbsVolumeRecommendationsRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public EbsFilter[] filters;
    public GetEbsVolumeRecommendationsRequest withFilters(EbsFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetEbsVolumeRecommendationsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEbsVolumeRecommendationsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeArns")
    public String[] volumeArns;
    public GetEbsVolumeRecommendationsRequest withVolumeArns(String[] volumeArns) {
        this.volumeArns = volumeArns;
        return this;
    }
}