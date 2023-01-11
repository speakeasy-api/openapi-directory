package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCustomVerificationEmailTemplateActionEnum action;
    public PostDeleteCustomVerificationEmailTemplateQueryParams withAction(PostDeleteCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCustomVerificationEmailTemplateVersionEnum version;
    public PostDeleteCustomVerificationEmailTemplateQueryParams withVersion(PostDeleteCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}