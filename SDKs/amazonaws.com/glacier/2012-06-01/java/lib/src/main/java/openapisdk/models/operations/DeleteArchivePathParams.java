package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteArchivePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveId")
    public String archiveId;
    public DeleteArchivePathParams withArchiveId(String archiveId) {
        this.archiveId = archiveId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public DeleteArchivePathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}