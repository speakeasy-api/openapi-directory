package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCacheSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCacheSubnetGroupActionEnum action;
    public GetDeleteCacheSubnetGroupQueryParams withAction(GetDeleteCacheSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheSubnetGroupName")
    public String cacheSubnetGroupName;
    public GetDeleteCacheSubnetGroupQueryParams withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCacheSubnetGroupVersionEnum version;
    public GetDeleteCacheSubnetGroupQueryParams withVersion(GetDeleteCacheSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}