package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmailIdentityPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public CreateEmailIdentityPolicyPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PolicyName")
    public String policyName;
    public CreateEmailIdentityPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}