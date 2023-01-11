package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateCustomVerificationEmailTemplateActionEnum action;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withAction(GetUpdateCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FailureRedirectionURL")
    public String failureRedirectionURL;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FromEmailAddress")
    public String fromEmailAddress;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SuccessRedirectionURL")
    public String successRedirectionURL;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateContent")
    public String templateContent;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateSubject")
    public String templateSubject;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateCustomVerificationEmailTemplateVersionEnum version;
    public GetUpdateCustomVerificationEmailTemplateQueryParams withVersion(GetUpdateCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}