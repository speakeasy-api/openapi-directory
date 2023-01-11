package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComposeEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetComposeEnvironmentsActionEnum action;
    public GetComposeEnvironmentsQueryParams withAction(GetComposeEnvironmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetComposeEnvironmentsQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetComposeEnvironmentsQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetComposeEnvironmentsVersionEnum version;
    public GetComposeEnvironmentsQueryParams withVersion(GetComposeEnvironmentsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionLabels")
    public String[] versionLabels;
    public GetComposeEnvironmentsQueryParams withVersionLabels(String[] versionLabels) {
        this.versionLabels = versionLabels;
        return this;
    }
}