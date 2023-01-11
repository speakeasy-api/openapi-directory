package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateCustomVerificationEmailTemplateActionEnum action;
    public GetCreateCustomVerificationEmailTemplateQueryParams withAction(GetCreateCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FailureRedirectionURL")
    public String failureRedirectionURL;
    public GetCreateCustomVerificationEmailTemplateQueryParams withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FromEmailAddress")
    public String fromEmailAddress;
    public GetCreateCustomVerificationEmailTemplateQueryParams withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SuccessRedirectionURL")
    public String successRedirectionURL;
    public GetCreateCustomVerificationEmailTemplateQueryParams withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateContent")
    public String templateContent;
    public GetCreateCustomVerificationEmailTemplateQueryParams withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetCreateCustomVerificationEmailTemplateQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateSubject")
    public String templateSubject;
    public GetCreateCustomVerificationEmailTemplateQueryParams withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateCustomVerificationEmailTemplateVersionEnum version;
    public GetCreateCustomVerificationEmailTemplateQueryParams withVersion(GetCreateCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}