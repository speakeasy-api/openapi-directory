package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRecommendationFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeReviewArn")
    public String codeReviewArn;
    public DescribeRecommendationFeedbackPathParams withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
}