package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVaultItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public CreateVaultItemPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}