package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultItemByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public GetVaultItemByIdPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public GetVaultItemByIdPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}