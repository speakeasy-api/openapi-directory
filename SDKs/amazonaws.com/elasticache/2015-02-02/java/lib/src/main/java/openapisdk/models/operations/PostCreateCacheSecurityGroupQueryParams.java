package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCacheSecurityGroupActionEnum action;
    public PostCreateCacheSecurityGroupQueryParams withAction(PostCreateCacheSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCacheSecurityGroupVersionEnum version;
    public PostCreateCacheSecurityGroupQueryParams withVersion(PostCreateCacheSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}