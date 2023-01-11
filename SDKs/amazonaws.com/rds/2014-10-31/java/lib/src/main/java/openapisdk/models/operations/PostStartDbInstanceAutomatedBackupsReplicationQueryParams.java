package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartDbInstanceAutomatedBackupsReplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartDbInstanceAutomatedBackupsReplicationActionEnum action;
    public PostStartDbInstanceAutomatedBackupsReplicationQueryParams withAction(PostStartDbInstanceAutomatedBackupsReplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartDbInstanceAutomatedBackupsReplicationVersionEnum version;
    public PostStartDbInstanceAutomatedBackupsReplicationQueryParams withVersion(PostStartDbInstanceAutomatedBackupsReplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}