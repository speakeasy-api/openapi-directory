package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssetModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assetModelId")
    public String assetModelId;
    public DescribeAssetModelPathParams withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
}