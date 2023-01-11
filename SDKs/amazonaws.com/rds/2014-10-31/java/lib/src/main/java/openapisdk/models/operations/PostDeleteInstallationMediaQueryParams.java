package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstallationMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteInstallationMediaActionEnum action;
    public PostDeleteInstallationMediaQueryParams withAction(PostDeleteInstallationMediaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteInstallationMediaVersionEnum version;
    public PostDeleteInstallationMediaQueryParams withVersion(PostDeleteInstallationMediaVersionEnum version) {
        this.version = version;
        return this;
    }
}