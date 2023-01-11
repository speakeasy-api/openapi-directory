package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public InitiateJobPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public InitiateJobPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}