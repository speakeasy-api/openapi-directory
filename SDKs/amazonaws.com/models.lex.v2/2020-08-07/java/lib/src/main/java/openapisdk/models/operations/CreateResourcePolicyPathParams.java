package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourcePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public CreateResourcePolicyPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}