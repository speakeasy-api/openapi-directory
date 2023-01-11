package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateTemplateActionEnum action;
    public GetUpdateTemplateQueryParams withAction(GetUpdateTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Template")
    public GetUpdateTemplateTemplate template;
    public GetUpdateTemplateQueryParams withTemplate(GetUpdateTemplateTemplate template) {
        this.template = template;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateTemplateVersionEnum version;
    public GetUpdateTemplateQueryParams withVersion(GetUpdateTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}