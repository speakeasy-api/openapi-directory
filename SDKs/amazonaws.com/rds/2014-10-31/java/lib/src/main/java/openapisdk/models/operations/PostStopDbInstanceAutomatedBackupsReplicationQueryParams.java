package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopDbInstanceAutomatedBackupsReplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStopDbInstanceAutomatedBackupsReplicationActionEnum action;
    public PostStopDbInstanceAutomatedBackupsReplicationQueryParams withAction(PostStopDbInstanceAutomatedBackupsReplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStopDbInstanceAutomatedBackupsReplicationVersionEnum version;
    public PostStopDbInstanceAutomatedBackupsReplicationQueryParams withVersion(PostStopDbInstanceAutomatedBackupsReplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}