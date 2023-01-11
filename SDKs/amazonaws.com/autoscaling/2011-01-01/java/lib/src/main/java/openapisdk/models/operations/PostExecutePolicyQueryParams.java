package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExecutePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostExecutePolicyActionEnum action;
    public PostExecutePolicyQueryParams withAction(PostExecutePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostExecutePolicyVersionEnum version;
    public PostExecutePolicyQueryParams withVersion(PostExecutePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}