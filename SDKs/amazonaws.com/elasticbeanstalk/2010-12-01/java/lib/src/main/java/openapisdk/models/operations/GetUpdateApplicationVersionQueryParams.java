package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateApplicationVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateApplicationVersionActionEnum action;
    public GetUpdateApplicationVersionQueryParams withAction(GetUpdateApplicationVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetUpdateApplicationVersionQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetUpdateApplicationVersionQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateApplicationVersionVersionEnum version;
    public GetUpdateApplicationVersionQueryParams withVersion(GetUpdateApplicationVersionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionLabel")
    public String versionLabel;
    public GetUpdateApplicationVersionQueryParams withVersionLabel(String versionLabel) {
        this.versionLabel = versionLabel;
        return this;
    }
}