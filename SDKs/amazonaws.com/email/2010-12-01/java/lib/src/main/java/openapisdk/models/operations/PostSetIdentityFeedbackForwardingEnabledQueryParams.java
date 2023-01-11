package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityFeedbackForwardingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIdentityFeedbackForwardingEnabledActionEnum action;
    public PostSetIdentityFeedbackForwardingEnabledQueryParams withAction(PostSetIdentityFeedbackForwardingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIdentityFeedbackForwardingEnabledVersionEnum version;
    public PostSetIdentityFeedbackForwardingEnabledQueryParams withVersion(PostSetIdentityFeedbackForwardingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}