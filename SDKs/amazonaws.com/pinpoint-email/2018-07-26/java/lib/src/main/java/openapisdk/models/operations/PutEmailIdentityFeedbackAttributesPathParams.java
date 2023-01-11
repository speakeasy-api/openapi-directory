package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityFeedbackAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public PutEmailIdentityFeedbackAttributesPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
}