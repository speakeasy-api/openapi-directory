package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyLaunchTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyLaunchTemplateActionEnum action;
    public GetModifyLaunchTemplateQueryParams withAction(GetModifyLaunchTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetModifyLaunchTemplateQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyLaunchTemplateQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchTemplateId")
    public String launchTemplateId;
    public GetModifyLaunchTemplateQueryParams withLaunchTemplateId(String launchTemplateId) {
        this.launchTemplateId = launchTemplateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LaunchTemplateName")
    public String launchTemplateName;
    public GetModifyLaunchTemplateQueryParams withLaunchTemplateName(String launchTemplateName) {
        this.launchTemplateName = launchTemplateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SetDefaultVersion")
    public String setDefaultVersion;
    public GetModifyLaunchTemplateQueryParams withSetDefaultVersion(String setDefaultVersion) {
        this.setDefaultVersion = setDefaultVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyLaunchTemplateVersionEnum version;
    public GetModifyLaunchTemplateQueryParams withVersion(GetModifyLaunchTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}