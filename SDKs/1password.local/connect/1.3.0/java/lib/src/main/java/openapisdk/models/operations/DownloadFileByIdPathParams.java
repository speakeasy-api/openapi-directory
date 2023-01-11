package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadFileByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileUuid")
    public String fileUuid;
    public DownloadFileByIdPathParams withFileUuid(String fileUuid) {
        this.fileUuid = fileUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemUuid")
    public String itemUuid;
    public DownloadFileByIdPathParams withItemUuid(String itemUuid) {
        this.itemUuid = itemUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public DownloadFileByIdPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}