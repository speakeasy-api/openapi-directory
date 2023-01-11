package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public DeleteResourcePolicyPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}