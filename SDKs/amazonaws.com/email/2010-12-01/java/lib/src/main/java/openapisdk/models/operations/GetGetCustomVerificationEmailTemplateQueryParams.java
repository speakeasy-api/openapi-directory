package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetCustomVerificationEmailTemplateActionEnum action;
    public GetGetCustomVerificationEmailTemplateQueryParams withAction(GetGetCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetGetCustomVerificationEmailTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetCustomVerificationEmailTemplateVersionEnum version;
    public GetGetCustomVerificationEmailTemplateQueryParams withVersion(GetGetCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}