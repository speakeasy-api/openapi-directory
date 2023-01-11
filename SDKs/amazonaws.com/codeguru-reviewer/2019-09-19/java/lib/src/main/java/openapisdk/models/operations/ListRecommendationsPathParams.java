package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeReviewArn")
    public String codeReviewArn;
    public ListRecommendationsPathParams withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
}