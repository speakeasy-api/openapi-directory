package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCustomVerificationEmailTemplateActionEnum action;
    public PostCreateCustomVerificationEmailTemplateQueryParams withAction(PostCreateCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCustomVerificationEmailTemplateVersionEnum version;
    public PostCreateCustomVerificationEmailTemplateQueryParams withVersion(PostCreateCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}