package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public UpdateAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}