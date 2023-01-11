package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReplicationGroupActionEnum action;
    public PostCreateReplicationGroupQueryParams withAction(PostCreateReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReplicationGroupVersionEnum version;
    public PostCreateReplicationGroupQueryParams withVersion(PostCreateReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}