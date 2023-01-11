package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateTemplateActionEnum action;
    public GetCreateTemplateQueryParams withAction(GetCreateTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Template")
    public GetCreateTemplateTemplate template;
    public GetCreateTemplateQueryParams withTemplate(GetCreateTemplateTemplate template) {
        this.template = template;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateTemplateVersionEnum version;
    public GetCreateTemplateQueryParams withVersion(GetCreateTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}