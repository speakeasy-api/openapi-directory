package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetailsOfFileByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileUuid")
    public String fileUuid;
    public GetDetailsOfFileByIdPathParams withFileUuid(String fileUuid) {
        this.fileUuid = fileUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public GetDetailsOfFileByIdPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public GetDetailsOfFileByIdPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}