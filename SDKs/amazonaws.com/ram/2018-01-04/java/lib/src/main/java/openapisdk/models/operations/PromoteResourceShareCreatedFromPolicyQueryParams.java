package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PromoteResourceShareCreatedFromPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceShareArn")
    public String resourceShareArn;
    public PromoteResourceShareCreatedFromPolicyQueryParams withResourceShareArn(String resourceShareArn) {
        this.resourceShareArn = resourceShareArn;
        return this;
    }
}