package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public DisassociateAssetsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}