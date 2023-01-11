package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecommendationsRequestBody {
    @JsonProperty("campaignArn")
    public String campaignArn;
    public GetRecommendationsRequestBody withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, String> context;
    public GetRecommendationsRequestBody withContext(java.util.Map<String, String> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterArn")
    public String filterArn;
    public GetRecommendationsRequestBody withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterValues")
    public java.util.Map<String, String> filterValues;
    public GetRecommendationsRequestBody withFilterValues(java.util.Map<String, String> filterValues) {
        this.filterValues = filterValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public GetRecommendationsRequestBody withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numResults")
    public Long numResults;
    public GetRecommendationsRequestBody withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GetRecommendationsRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}