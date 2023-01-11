package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetVaultAccessPolicyPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public GetVaultAccessPolicyPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}