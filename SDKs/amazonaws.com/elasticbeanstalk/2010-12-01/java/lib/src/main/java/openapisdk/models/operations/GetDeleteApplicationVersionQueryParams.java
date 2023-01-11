package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteApplicationVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteApplicationVersionActionEnum action;
    public GetDeleteApplicationVersionQueryParams withAction(GetDeleteApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetDeleteApplicationVersionQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeleteSourceBundle")
    public Boolean deleteSourceBundle;
    public GetDeleteApplicationVersionQueryParams withDeleteSourceBundle(Boolean deleteSourceBundle) {
        this.deleteSourceBundle = deleteSourceBundle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteApplicationVersionVersionEnum version;
    public GetDeleteApplicationVersionQueryParams withVersion(GetDeleteApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionLabel")
    public String versionLabel;
    public GetDeleteApplicationVersionQueryParams withVersionLabel(String versionLabel) {
        this.versionLabel = versionLabel;
        return this;
    }
}