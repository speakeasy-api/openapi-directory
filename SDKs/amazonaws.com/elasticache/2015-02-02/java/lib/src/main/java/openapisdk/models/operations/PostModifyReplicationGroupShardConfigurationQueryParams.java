package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReplicationGroupShardConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyReplicationGroupShardConfigurationActionEnum action;
    public PostModifyReplicationGroupShardConfigurationQueryParams withAction(PostModifyReplicationGroupShardConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyReplicationGroupShardConfigurationVersionEnum version;
    public PostModifyReplicationGroupShardConfigurationQueryParams withVersion(PostModifyReplicationGroupShardConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}