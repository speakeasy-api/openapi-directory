package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCacheSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCacheSecurityGroupActionEnum action;
    public GetDeleteCacheSecurityGroupQueryParams withAction(GetDeleteCacheSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSecurityGroupName")
    public String cacheSecurityGroupName;
    public GetDeleteCacheSecurityGroupQueryParams withCacheSecurityGroupName(String cacheSecurityGroupName) {
        this.cacheSecurityGroupName = cacheSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCacheSecurityGroupVersionEnum version;
    public GetDeleteCacheSecurityGroupQueryParams withVersion(GetDeleteCacheSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}