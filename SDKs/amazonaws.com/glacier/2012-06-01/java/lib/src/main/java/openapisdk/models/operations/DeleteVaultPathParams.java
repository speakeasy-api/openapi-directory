package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVaultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteVaultPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public DeleteVaultPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}