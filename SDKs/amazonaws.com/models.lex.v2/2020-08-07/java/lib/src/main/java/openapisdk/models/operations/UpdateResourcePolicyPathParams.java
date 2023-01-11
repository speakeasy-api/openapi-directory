package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourcePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public UpdateResourcePolicyPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}