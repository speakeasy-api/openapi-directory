package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIdentityFeedbackForwardingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIdentityFeedbackForwardingEnabledActionEnum action;
    public GetSetIdentityFeedbackForwardingEnabledQueryParams withAction(GetSetIdentityFeedbackForwardingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForwardingEnabled")
    public Boolean forwardingEnabled;
    public GetSetIdentityFeedbackForwardingEnabledQueryParams withForwardingEnabled(Boolean forwardingEnabled) {
        this.forwardingEnabled = forwardingEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetSetIdentityFeedbackForwardingEnabledQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIdentityFeedbackForwardingEnabledVersionEnum version;
    public GetSetIdentityFeedbackForwardingEnabledQueryParams withVersion(GetSetIdentityFeedbackForwardingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}