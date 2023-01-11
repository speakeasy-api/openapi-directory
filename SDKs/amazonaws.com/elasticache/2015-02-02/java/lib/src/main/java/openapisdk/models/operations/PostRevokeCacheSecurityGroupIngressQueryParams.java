package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeCacheSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeCacheSecurityGroupIngressActionEnum action;
    public PostRevokeCacheSecurityGroupIngressQueryParams withAction(PostRevokeCacheSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeCacheSecurityGroupIngressVersionEnum version;
    public PostRevokeCacheSecurityGroupIngressQueryParams withVersion(PostRevokeCacheSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}