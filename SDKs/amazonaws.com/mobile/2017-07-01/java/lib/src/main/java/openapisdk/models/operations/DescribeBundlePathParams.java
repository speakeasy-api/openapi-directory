package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bundleId")
    public String bundleId;
    public DescribeBundlePathParams withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
}