package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateCustomVerificationEmailTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateCustomVerificationEmailTemplateActionEnum action;
    public PostUpdateCustomVerificationEmailTemplateQueryParams withAction(PostUpdateCustomVerificationEmailTemplateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateCustomVerificationEmailTemplateVersionEnum version;
    public PostUpdateCustomVerificationEmailTemplateQueryParams withVersion(PostUpdateCustomVerificationEmailTemplateVersionEnum version) {
        this.version = version;
        return this;
    }
}