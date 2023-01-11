package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public GetItemFilesPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public GetItemFilesPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}