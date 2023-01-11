package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public DeleteAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}