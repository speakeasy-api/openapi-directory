package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComponentPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=componentArn")
    public String componentArn;
    public GetComponentPolicyQueryParams withComponentArn(String componentArn) {
        this.componentArn = componentArn;
        return this;
    }
}