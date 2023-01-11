package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmailIdentityMailFromAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public PutEmailIdentityMailFromAttributesPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
}