package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteConfigurationTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteConfigurationTemplateActionEnum action;
    public GetDeleteConfigurationTemplateQueryParams withAction(GetDeleteConfigurationTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetDeleteConfigurationTemplateQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetDeleteConfigurationTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteConfigurationTemplateVersionEnum version;
    public GetDeleteConfigurationTemplateQueryParams withVersion(GetDeleteConfigurationTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}