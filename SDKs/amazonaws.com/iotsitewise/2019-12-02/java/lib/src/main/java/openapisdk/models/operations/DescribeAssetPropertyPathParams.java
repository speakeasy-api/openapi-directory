package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssetPropertyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public DescribeAssetPropertyPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyId")
    public String propertyId;
    public DescribeAssetPropertyPathParams withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
}