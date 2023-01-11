package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTestRenderTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTestRenderTemplateActionEnum action;
    public GetTestRenderTemplateQueryParams withAction(GetTestRenderTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateData")
    public String templateData;
    public GetTestRenderTemplateQueryParams withTemplateData(String templateData) {
        this.templateData = templateData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetTestRenderTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTestRenderTemplateVersionEnum version;
    public GetTestRenderTemplateQueryParams withVersion(GetTestRenderTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}