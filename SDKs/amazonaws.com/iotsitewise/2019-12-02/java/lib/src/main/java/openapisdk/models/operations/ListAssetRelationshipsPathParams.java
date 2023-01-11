package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssetRelationshipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public ListAssetRelationshipsPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}