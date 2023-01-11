package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCustomVerificationEmailTemplateActionEnum action;
    public GetDeleteCustomVerificationEmailTemplateQueryParams withAction(GetDeleteCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetDeleteCustomVerificationEmailTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCustomVerificationEmailTemplateVersionEnum version;
    public GetDeleteCustomVerificationEmailTemplateQueryParams withVersion(GetDeleteCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}