package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public GetVaultItemsPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}