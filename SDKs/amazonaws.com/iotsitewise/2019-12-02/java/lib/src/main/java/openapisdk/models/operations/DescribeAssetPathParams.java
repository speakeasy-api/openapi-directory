package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetId")
    public String assetId;
    public DescribeAssetPathParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
}