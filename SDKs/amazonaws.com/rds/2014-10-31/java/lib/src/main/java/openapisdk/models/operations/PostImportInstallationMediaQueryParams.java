package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportInstallationMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportInstallationMediaActionEnum action;
    public PostImportInstallationMediaQueryParams withAction(PostImportInstallationMediaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportInstallationMediaVersionEnum version;
    public PostImportInstallationMediaQueryParams withVersion(PostImportInstallationMediaVersionEnum version) {
        this.version = version;
        return this;
    }
}