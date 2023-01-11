package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyReplicationGroupActionEnum action;
    public PostModifyReplicationGroupQueryParams withAction(PostModifyReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyReplicationGroupVersionEnum version;
    public PostModifyReplicationGroupQueryParams withVersion(PostModifyReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}