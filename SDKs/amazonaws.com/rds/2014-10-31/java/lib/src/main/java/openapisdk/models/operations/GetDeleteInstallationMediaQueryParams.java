package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteInstallationMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteInstallationMediaActionEnum action;
    public GetDeleteInstallationMediaQueryParams withAction(GetDeleteInstallationMediaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstallationMediaId")
    public String installationMediaId;
    public GetDeleteInstallationMediaQueryParams withInstallationMediaId(String installationMediaId) {
        this.installationMediaId = installationMediaId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteInstallationMediaVersionEnum version;
    public GetDeleteInstallationMediaQueryParams withVersion(GetDeleteInstallationMediaVersionEnum version) {
        this.version = version;
        return this;
    }
}