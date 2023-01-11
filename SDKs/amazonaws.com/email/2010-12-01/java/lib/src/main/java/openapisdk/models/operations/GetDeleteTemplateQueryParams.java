package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTemplateActionEnum action;
    public GetDeleteTemplateQueryParams withAction(GetDeleteTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetDeleteTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTemplateVersionEnum version;
    public GetDeleteTemplateQueryParams withVersion(GetDeleteTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}