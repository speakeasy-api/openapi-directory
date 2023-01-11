package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociatedAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public ListAssociatedAssetsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}