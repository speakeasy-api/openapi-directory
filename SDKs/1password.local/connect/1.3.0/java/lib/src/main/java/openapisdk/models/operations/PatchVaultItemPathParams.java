package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVaultItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public PatchVaultItemPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public PatchVaultItemPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}