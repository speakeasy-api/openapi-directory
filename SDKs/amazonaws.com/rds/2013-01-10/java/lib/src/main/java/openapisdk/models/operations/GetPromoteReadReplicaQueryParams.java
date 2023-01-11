package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPromoteReadReplicaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPromoteReadReplicaActionEnum action;
    public GetPromoteReadReplicaQueryParams withAction(GetPromoteReadReplicaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BackupRetentionPeriod")
    public Long backupRetentionPeriod;
    public GetPromoteReadReplicaQueryParams withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetPromoteReadReplicaQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PreferredBackupWindow")
    public String preferredBackupWindow;
    public GetPromoteReadReplicaQueryParams withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPromoteReadReplicaVersionEnum version;
    public GetPromoteReadReplicaQueryParams withVersion(GetPromoteReadReplicaVersionEnum version) {
        this.version = version;
        return this;
    }
}