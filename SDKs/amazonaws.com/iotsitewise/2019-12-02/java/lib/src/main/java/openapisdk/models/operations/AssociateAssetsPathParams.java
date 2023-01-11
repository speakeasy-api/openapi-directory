package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public AssociateAssetsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}