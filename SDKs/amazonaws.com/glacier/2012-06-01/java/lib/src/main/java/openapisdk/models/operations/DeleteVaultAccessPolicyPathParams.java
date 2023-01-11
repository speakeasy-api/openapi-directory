package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVaultAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteVaultAccessPolicyPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public DeleteVaultAccessPolicyPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}