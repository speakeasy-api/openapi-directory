package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSendCustomVerificationEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSendCustomVerificationEmailActionEnum action;
    public GetSendCustomVerificationEmailQueryParams withAction(GetSendCustomVerificationEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetSendCustomVerificationEmailQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmailAddress")
    public String emailAddress;
    public GetSendCustomVerificationEmailQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TemplateName")
    public String templateName;
    public GetSendCustomVerificationEmailQueryParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSendCustomVerificationEmailVersionEnum version;
    public GetSendCustomVerificationEmailQueryParams withVersion(GetSendCustomVerificationEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}