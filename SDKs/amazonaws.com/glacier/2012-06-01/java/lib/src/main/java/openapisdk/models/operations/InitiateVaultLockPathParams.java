package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateVaultLockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public InitiateVaultLockPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public InitiateVaultLockPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}