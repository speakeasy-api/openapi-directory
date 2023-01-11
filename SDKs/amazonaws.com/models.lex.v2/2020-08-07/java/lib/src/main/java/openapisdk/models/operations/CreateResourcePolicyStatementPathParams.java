package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourcePolicyStatementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public CreateResourcePolicyStatementPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}