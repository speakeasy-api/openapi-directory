package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFailoverGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostFailoverGlobalReplicationGroupActionEnum action;
    public PostFailoverGlobalReplicationGroupQueryParams withAction(PostFailoverGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostFailoverGlobalReplicationGroupVersionEnum version;
    public PostFailoverGlobalReplicationGroupQueryParams withVersion(PostFailoverGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}