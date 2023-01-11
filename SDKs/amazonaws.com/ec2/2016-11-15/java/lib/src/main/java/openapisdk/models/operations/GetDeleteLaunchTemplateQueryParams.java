package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLaunchTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLaunchTemplateActionEnum action;
    public GetDeleteLaunchTemplateQueryParams withAction(GetDeleteLaunchTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteLaunchTemplateQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchTemplateId")
    public String launchTemplateId;
    public GetDeleteLaunchTemplateQueryParams withLaunchTemplateId(String launchTemplateId) {
        this.launchTemplateId = launchTemplateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchTemplateName")
    public String launchTemplateName;
    public GetDeleteLaunchTemplateQueryParams withLaunchTemplateName(String launchTemplateName) {
        this.launchTemplateName = launchTemplateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLaunchTemplateVersionEnum version;
    public GetDeleteLaunchTemplateQueryParams withVersion(GetDeleteLaunchTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}