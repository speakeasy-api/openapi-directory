package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imageArn")
    public String imageArn;
    public GetImagePolicyQueryParams withImageArn(String imageArn) {
        this.imageArn = imageArn;
        return this;
    }
}