package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartDbInstanceAutomatedBackupsReplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartDbInstanceAutomatedBackupsReplicationActionEnum action;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withAction(GetStartDbInstanceAutomatedBackupsReplicationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BackupRetentionPeriod")
    public Long backupRetentionPeriod;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KmsKeyId")
    public String kmsKeyId;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PreSignedUrl")
    public String preSignedUrl;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withPreSignedUrl(String preSignedUrl) {
        this.preSignedUrl = preSignedUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBInstanceArn")
    public String sourceDBInstanceArn;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withSourceDbInstanceArn(String sourceDBInstanceArn) {
        this.sourceDBInstanceArn = sourceDBInstanceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartDbInstanceAutomatedBackupsReplicationVersionEnum version;
    public GetStartDbInstanceAutomatedBackupsReplicationQueryParams withVersion(GetStartDbInstanceAutomatedBackupsReplicationVersionEnum version) {
        this.version = version;
        return this;
    }
}