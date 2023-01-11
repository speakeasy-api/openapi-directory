package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCacheSecurityGroupActionEnum action;
    public PostDeleteCacheSecurityGroupQueryParams withAction(PostDeleteCacheSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCacheSecurityGroupVersionEnum version;
    public PostDeleteCacheSecurityGroupQueryParams withVersion(PostDeleteCacheSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}