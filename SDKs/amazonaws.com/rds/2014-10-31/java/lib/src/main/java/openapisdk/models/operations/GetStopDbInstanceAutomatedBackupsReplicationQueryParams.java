package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStopDbInstanceAutomatedBackupsReplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStopDbInstanceAutomatedBackupsReplicationActionEnum action;
    public GetStopDbInstanceAutomatedBackupsReplicationQueryParams withAction(GetStopDbInstanceAutomatedBackupsReplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBInstanceArn")
    public String sourceDBInstanceArn;
    public GetStopDbInstanceAutomatedBackupsReplicationQueryParams withSourceDbInstanceArn(String sourceDBInstanceArn) {
        this.sourceDBInstanceArn = sourceDBInstanceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStopDbInstanceAutomatedBackupsReplicationVersionEnum version;
    public GetStopDbInstanceAutomatedBackupsReplicationQueryParams withVersion(GetStopDbInstanceAutomatedBackupsReplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}