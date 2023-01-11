package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToVaultPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AddTagsToVaultPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public AddTagsToVaultPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}