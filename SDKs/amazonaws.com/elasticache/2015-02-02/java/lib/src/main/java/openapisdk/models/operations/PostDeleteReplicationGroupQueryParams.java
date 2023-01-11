package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteReplicationGroupActionEnum action;
    public PostDeleteReplicationGroupQueryParams withAction(PostDeleteReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteReplicationGroupVersionEnum version;
    public PostDeleteReplicationGroupQueryParams withVersion(PostDeleteReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}