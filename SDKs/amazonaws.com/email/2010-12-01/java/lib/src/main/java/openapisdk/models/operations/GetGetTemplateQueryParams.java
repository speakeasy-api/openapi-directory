package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetTemplateActionEnum action;
    public GetGetTemplateQueryParams withAction(GetGetTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetGetTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetTemplateVersionEnum version;
    public GetGetTemplateQueryParams withVersion(GetGetTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}