package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3AssetLicensingAssetIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public PostV3AssetLicensingAssetIdPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}