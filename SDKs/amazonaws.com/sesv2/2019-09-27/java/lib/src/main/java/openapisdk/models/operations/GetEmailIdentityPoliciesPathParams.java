package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailIdentityPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public GetEmailIdentityPoliciesPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
}