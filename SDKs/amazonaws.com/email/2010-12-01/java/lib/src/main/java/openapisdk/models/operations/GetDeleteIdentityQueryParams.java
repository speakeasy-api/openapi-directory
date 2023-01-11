package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteIdentityActionEnum action;
    public GetDeleteIdentityQueryParams withAction(GetDeleteIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetDeleteIdentityQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteIdentityVersionEnum version;
    public GetDeleteIdentityQueryParams withVersion(GetDeleteIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}