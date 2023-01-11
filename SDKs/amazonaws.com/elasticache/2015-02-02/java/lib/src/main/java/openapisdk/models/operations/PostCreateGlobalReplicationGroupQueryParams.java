package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateGlobalReplicationGroupActionEnum action;
    public PostCreateGlobalReplicationGroupQueryParams withAction(PostCreateGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateGlobalReplicationGroupVersionEnum version;
    public PostCreateGlobalReplicationGroupQueryParams withVersion(PostCreateGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}