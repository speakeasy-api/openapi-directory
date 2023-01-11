package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetModelId")
    public String assetModelId;
    public UpdateAssetModelPathParams withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
}