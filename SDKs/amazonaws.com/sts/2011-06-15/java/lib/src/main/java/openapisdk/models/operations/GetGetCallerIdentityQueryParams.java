package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCallerIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetCallerIdentityActionEnum action;
    public GetGetCallerIdentityQueryParams withAction(GetGetCallerIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetCallerIdentityVersionEnum version;
    public GetGetCallerIdentityQueryParams withVersion(GetGetCallerIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}