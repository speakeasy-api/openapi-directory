package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRecommendationFeedbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RecommendationId")
    public String recommendationId;
    public DescribeRecommendationFeedbackQueryParams withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserId")
    public String userId;
    public DescribeRecommendationFeedbackQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}