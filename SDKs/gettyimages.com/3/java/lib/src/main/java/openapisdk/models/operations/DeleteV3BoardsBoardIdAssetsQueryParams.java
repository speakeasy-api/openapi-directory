package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3BoardsBoardIdAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_ids")
    public String[] assetIds;
    public DeleteV3BoardsBoardIdAssetsQueryParams withAssetIds(String[] assetIds) {
        this.assetIds = assetIds;
        return this;
    }
}