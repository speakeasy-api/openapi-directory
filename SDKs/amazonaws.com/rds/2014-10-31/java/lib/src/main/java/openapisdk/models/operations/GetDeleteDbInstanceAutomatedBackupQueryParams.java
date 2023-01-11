package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbInstanceAutomatedBackupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbInstanceAutomatedBackupActionEnum action;
    public GetDeleteDbInstanceAutomatedBackupQueryParams withAction(GetDeleteDbInstanceAutomatedBackupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceAutomatedBackupsArn")
    public String dbInstanceAutomatedBackupsArn;
    public GetDeleteDbInstanceAutomatedBackupQueryParams withDbInstanceAutomatedBackupsArn(String dbInstanceAutomatedBackupsArn) {
        this.dbInstanceAutomatedBackupsArn = dbInstanceAutomatedBackupsArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DbiResourceId")
    public String dbiResourceId;
    public GetDeleteDbInstanceAutomatedBackupQueryParams withDbiResourceId(String dbiResourceId) {
        this.dbiResourceId = dbiResourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbInstanceAutomatedBackupVersionEnum version;
    public GetDeleteDbInstanceAutomatedBackupQueryParams withVersion(GetDeleteDbInstanceAutomatedBackupVersionEnum version) {
        this.version = version;
        return this;
    }
}