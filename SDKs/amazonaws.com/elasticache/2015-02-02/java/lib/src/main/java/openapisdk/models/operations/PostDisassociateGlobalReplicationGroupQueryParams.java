package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateGlobalReplicationGroupActionEnum action;
    public PostDisassociateGlobalReplicationGroupQueryParams withAction(PostDisassociateGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateGlobalReplicationGroupVersionEnum version;
    public PostDisassociateGlobalReplicationGroupQueryParams withVersion(PostDisassociateGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}