package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCallerIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetCallerIdentityActionEnum action;
    public PostGetCallerIdentityQueryParams withAction(PostGetCallerIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetCallerIdentityVersionEnum version;
    public PostGetCallerIdentityQueryParams withVersion(PostGetCallerIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}