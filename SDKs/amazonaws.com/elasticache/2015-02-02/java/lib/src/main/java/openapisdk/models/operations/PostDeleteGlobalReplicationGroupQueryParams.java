package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteGlobalReplicationGroupActionEnum action;
    public PostDeleteGlobalReplicationGroupQueryParams withAction(PostDeleteGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteGlobalReplicationGroupVersionEnum version;
    public PostDeleteGlobalReplicationGroupQueryParams withVersion(PostDeleteGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}