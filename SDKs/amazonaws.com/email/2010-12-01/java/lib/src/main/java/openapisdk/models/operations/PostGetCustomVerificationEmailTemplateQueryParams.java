package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetCustomVerificationEmailTemplateActionEnum action;
    public PostGetCustomVerificationEmailTemplateQueryParams withAction(PostGetCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetCustomVerificationEmailTemplateVersionEnum version;
    public PostGetCustomVerificationEmailTemplateQueryParams withVersion(PostGetCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}