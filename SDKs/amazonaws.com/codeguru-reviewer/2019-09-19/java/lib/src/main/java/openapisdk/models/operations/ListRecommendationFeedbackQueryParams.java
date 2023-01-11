package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendationFeedbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListRecommendationFeedbackQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListRecommendationFeedbackQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RecommendationIds")
    public String[] recommendationIds;
    public ListRecommendationFeedbackQueryParams withRecommendationIds(String[] recommendationIds) {
        this.recommendationIds = recommendationIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserIds")
    public String[] userIds;
    public ListRecommendationFeedbackQueryParams withUserIds(String[] userIds) {
        this.userIds = userIds;
        return this;
    }
}