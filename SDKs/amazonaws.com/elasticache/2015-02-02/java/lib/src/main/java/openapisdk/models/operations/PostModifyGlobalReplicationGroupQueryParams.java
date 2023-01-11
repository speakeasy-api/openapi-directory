package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyGlobalReplicationGroupActionEnum action;
    public PostModifyGlobalReplicationGroupQueryParams withAction(PostModifyGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyGlobalReplicationGroupVersionEnum version;
    public PostModifyGlobalReplicationGroupQueryParams withVersion(PostModifyGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}