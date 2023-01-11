package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultUuid")
    public String vaultUuid;
    public GetVaultByIdPathParams withVaultUuid(String vaultUuid) {
        this.vaultUuid = vaultUuid;
        return this;
    }
}