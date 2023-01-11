package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailIdentityPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailIdentity")
    public String emailIdentity;
    public UpdateEmailIdentityPolicyPathParams withEmailIdentity(String emailIdentity) {
        this.emailIdentity = emailIdentity;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PolicyName")
    public String policyName;
    public UpdateEmailIdentityPolicyPathParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}