package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportBundleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platform")
    public ExportBundlePlatformEnum platform;
    public ExportBundleQueryParams withPlatform(ExportBundlePlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projectId")
    public String projectId;
    public ExportBundleQueryParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}