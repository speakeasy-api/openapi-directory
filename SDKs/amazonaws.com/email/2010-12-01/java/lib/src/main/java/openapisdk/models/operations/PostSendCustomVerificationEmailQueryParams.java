package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendCustomVerificationEmailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSendCustomVerificationEmailActionEnum action;
    public PostSendCustomVerificationEmailQueryParams withAction(PostSendCustomVerificationEmailActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSendCustomVerificationEmailVersionEnum version;
    public PostSendCustomVerificationEmailQueryParams withVersion(PostSendCustomVerificationEmailVersionEnum version) {
        this.version = version;
        return this;
    }
}