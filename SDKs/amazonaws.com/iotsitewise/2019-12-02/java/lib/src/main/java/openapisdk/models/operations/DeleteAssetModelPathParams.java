package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssetModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetModelId")
    public String assetModelId;
    public DeleteAssetModelPathParams withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
}