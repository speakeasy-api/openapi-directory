package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheSubnetGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCacheSubnetGroupActionEnum action;
    public PostCreateCacheSubnetGroupQueryParams withAction(PostCreateCacheSubnetGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCacheSubnetGroupVersionEnum version;
    public PostCreateCacheSubnetGroupQueryParams withVersion(PostCreateCacheSubnetGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}