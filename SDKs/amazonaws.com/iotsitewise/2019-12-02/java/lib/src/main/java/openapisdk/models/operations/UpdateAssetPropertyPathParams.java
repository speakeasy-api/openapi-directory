package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetPropertyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public UpdateAssetPropertyPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyId")
    public String propertyId;
    public UpdateAssetPropertyPathParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
}