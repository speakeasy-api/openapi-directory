package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendationFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeReviewArn")
    public String codeReviewArn;
    public ListRecommendationFeedbackPathParams withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
}