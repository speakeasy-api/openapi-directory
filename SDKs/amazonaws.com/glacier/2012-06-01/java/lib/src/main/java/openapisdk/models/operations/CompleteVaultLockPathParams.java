package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteVaultLockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public CompleteVaultLockPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lockId")
    public String lockId;
    public CompleteVaultLockPathParams withLockId(String lockId) {
        this.lockId = lockId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public CompleteVaultLockPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}