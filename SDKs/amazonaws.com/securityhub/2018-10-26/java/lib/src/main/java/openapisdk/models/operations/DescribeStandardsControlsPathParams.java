package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStandardsControlsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StandardsSubscriptionArn")
    public String standardsSubscriptionArn;
    public DescribeStandardsControlsPathParams withStandardsSubscriptionArn(String standardsSubscriptionArn) {
        this.standardsSubscriptionArn = standardsSubscriptionArn;
        return this;
    }
}