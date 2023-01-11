package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourcePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public DescribeResourcePolicyPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}