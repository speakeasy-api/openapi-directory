package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCacheSubnetGroupActionEnum action;
    public PostDeleteCacheSubnetGroupQueryParams withAction(PostDeleteCacheSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCacheSubnetGroupVersionEnum version;
    public PostDeleteCacheSubnetGroupQueryParams withVersion(PostDeleteCacheSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}