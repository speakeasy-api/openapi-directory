package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCodeReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CodeReviewArn")
    public String codeReviewArn;
    public DescribeCodeReviewPathParams withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
}