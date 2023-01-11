package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPersonalizedRankingRequestBody {
    @JsonProperty("campaignArn")
    public String campaignArn;
    public GetPersonalizedRankingRequestBody withCampaignArn(String campaignArn) {
        this.campaignArn = campaignArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, String> context;
    public GetPersonalizedRankingRequestBody withContext(java.util.Map<String, String> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterArn")
    public String filterArn;
    public GetPersonalizedRankingRequestBody withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterValues")
    public java.util.Map<String, String> filterValues;
    public GetPersonalizedRankingRequestBody withFilterValues(java.util.Map<String, String> filterValues) {
        this.filterValues = filterValues;
        return this;
    }
    @JsonProperty("inputList")
    public String[] inputList;
    public GetPersonalizedRankingRequestBody withInputList(String[] inputList) {
        this.inputList = inputList;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public GetPersonalizedRankingRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}