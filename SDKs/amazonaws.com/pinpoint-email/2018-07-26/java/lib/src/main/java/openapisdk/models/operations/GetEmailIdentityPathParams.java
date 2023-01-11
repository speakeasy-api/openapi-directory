package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailIdentityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public GetEmailIdentityPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
}