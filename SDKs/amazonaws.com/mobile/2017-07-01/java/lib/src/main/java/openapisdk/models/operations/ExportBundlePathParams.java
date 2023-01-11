package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=bundleId")
    public String bundleId;
    public ExportBundlePathParams withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
}